import { useEffect, useRef } from 'react'
import { Calendar, GraduationCap, BookOpen, Clock } from 'lucide-react'

/**
 * Full-viewport backdrop: blue-purple gradient, a faint "timetable grid"
 * texture (the page's signature motif), a constellation-style particle
 * field, and slow-drifting academic icons.
 */
function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const COUNT = Math.min(70, Math.floor((width * height) / 22000))
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6,
    }))

    const LINK_DIST = 130
    let frameId

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(150, 170, 255, ${0.12 * (1 - dist / LINK_DIST)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(210, 220, 255, 0.55)'
        ctx.fill()
      }

      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(draw)
      }
    }

    draw()

    function handleResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  )
}

const FLOATING_ICONS = [
  { Icon: Calendar, className: 'top-[14%] left-[8%] md:left-[12%]', size: 34, anim: 'animate-float', delay: '0s' },
  { Icon: GraduationCap, className: 'top-[20%] right-[8%] md:right-[14%]', size: 40, anim: 'animate-float-slow', delay: '0.4s' },
  { Icon: BookOpen, className: 'bottom-[18%] left-[10%] md:left-[16%]', size: 32, anim: 'animate-float-slow', delay: '1s' },
  { Icon: Clock, className: 'bottom-[24%] right-[10%] md:right-[18%]', size: 30, anim: 'animate-float', delay: '0.7s' },
]

function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
      {FLOATING_ICONS.map(({ Icon, className, size, anim, delay }, i) => (
        <div
          key={i}
          className={`absolute ${className} ${anim} text-white/20`}
          style={{ animationDelay: delay }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  )
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void">
      {/* Core gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-cobalt/70 to-violet/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-indigo/40" />

      {/* Signature timetable-grid texture, slowly panning */}
      <div className="absolute inset-0 timetable-grid animate-grid-pan opacity-60" />

      {/* Soft glow blobs */}
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cobalt/40 blur-[110px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-violet/40 blur-[130px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-aqua/20 blur-[120px] animate-pulse-glow" />

      <ParticleField />
      <FloatingIcons />

      {/* Vignette to keep foreground content legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-transparent to-void/60" />
    </div>
  )
}
