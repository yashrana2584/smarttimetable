import { useEffect, useId, useRef, useState } from 'react'
import { Search, Check, ChevronDown } from 'lucide-react'

/**
 * SearchableSelect — searchable dropdown / combobox.
 *
 * Controlled for its *value*: `value` (the selected option's id) and
 * `onChange(id)` are owned by the parent, exactly like a native
 * `<select>`. Internal `useState` here is limited to transient UI
 * concerns only — whether the dropdown is open, the in-progress search
 * text, and which row is keyboard-highlighted — never the selection
 * itself. No ProjectContext, no other business logic.
 *
 * @param {string} label
 * @param {string} placeholder
 * @param {Array<{ id: string|number, name: string }>} options
 * @param {string|number|null} value
 * @param {(id: string|number) => void} onChange
 */
export default function SearchableSelect({
  label,
  placeholder = 'Search…',
  options = [],
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const optionRefs = useRef([])

  const baseId = useId()
  const listboxId = `${baseId}-listbox`

  const selectedOption = options.find((option) => option.id === value) ?? null

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(query.toLowerCase())
  )

  // Close on outside click.
  useEffect(() => {
    function handlePointerDown(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  // Reset keyboard highlight whenever the filtered list changes.
  useEffect(() => {
    setHighlightedIndex(0)
  }, [query, isOpen])

  // Keep the highlighted row scrolled into view.
  useEffect(() => {
    const node = optionRefs.current[highlightedIndex]
    if (node) node.scrollIntoView({ block: 'nearest' })
  }, [highlightedIndex])

  function openDropdown() {
    setQuery('')
    setIsOpen(true)
  }

  function selectOption(option) {
    onChange(option.id)
    setIsOpen(false)
    setQuery('')
  }

  function handleKeyDown(event) {
    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'Enter') {
        event.preventDefault()
        openDropdown()
      }
      return
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setHighlightedIndex((i) => Math.min(i + 1, filteredOptions.length - 1))
        break
      case 'ArrowUp':
        event.preventDefault()
        setHighlightedIndex((i) => Math.max(i - 1, 0))
        break
      case 'Enter':
        event.preventDefault()
        if (filteredOptions[highlightedIndex]) {
          selectOption(filteredOptions[highlightedIndex])
        }
        break
      case 'Escape':
        event.preventDefault()
        setIsOpen(false)
        inputRef.current?.blur()
        break
      default:
        break
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {label && (
        <label className="mb-1.5 block font-body text-xs font-medium text-white/55">
          {label}
        </label>
      )}

      <div
        className={[
          'flex items-center gap-2.5 rounded-xl border border-glassBorder bg-white/[0.03] px-3.5 py-2.5',
          'transition-colors duration-200',
          isOpen ? 'border-signal/50' : 'hover:border-white/20',
        ].join(' ')}
      >
        <Search size={15} strokeWidth={1.8} className="shrink-0 text-white/35" />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          value={isOpen ? query : selectedOption?.name ?? ''}
          placeholder={placeholder}
          onFocus={openDropdown}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent font-body text-sm text-white/85 outline-none placeholder:text-white/30"
        />
        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={[
            'shrink-0 text-white/30 transition-transform duration-200',
            isOpen ? 'rotate-180' : '',
          ].join(' ')}
        />
      </div>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          className="thin-scrollbar absolute z-20 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-glassBorder bg-navy/95 p-1.5 shadow-[0_16px_50px_-12px_rgba(2,8,23,0.8)] backdrop-blur-2xl"
        >
          {filteredOptions.length === 0 ? (
            <li className="px-3 py-6 text-center font-body text-sm text-white/40">
              No matching results
            </li>
          ) : (
            filteredOptions.map((option, index) => {
              const isSelected = option.id === value
              const isHighlighted = index === highlightedIndex

              return (
                <li
                  key={option.id}
                  ref={(node) => {
                    optionRefs.current[index] = node
                  }}
                  role="option"
                  aria-selected={isSelected}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onClick={() => selectOption(option)}
                    className={[
                      'flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left',
                      'font-body text-sm transition-colors duration-100',
                      isSelected ? 'text-signal' : 'text-white/75',
                      isHighlighted ? 'bg-white/[0.08]' : 'bg-transparent',
                    ].join(' ')}
                  >
                    <div className="min-w-0">
  <p className="truncate font-medium">
    {option.name}
  </p>

  {option.code && option.description && (
    <p className="text-xs text-white/45 truncate">
      {option.code} • {option.description}
    </p>
  )}
</div>
                    {isSelected && (
                      <Check size={14} strokeWidth={2.4} className="shrink-0 text-signal" />
                    )}
                  </button>
                </li>
              )
            })
          )}
        </ul>
      )}
    </div>
  )
}
