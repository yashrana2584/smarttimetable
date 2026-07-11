import SectionPanel from '../SectionPanel.jsx'
import Chip from '../Chip.jsx'

const SUBJECTS = [
  { code: 'CS201', name: 'Data Structures', credits: 4, dept: 'Computer Science' },
  { code: 'MA110', name: 'Linear Algebra', credits: 3, dept: 'Mathematics' },
  { code: 'PH150', name: 'Classical Mechanics', credits: 4, dept: 'Physics' },
  { code: 'CS305', name: 'Operating Systems', credits: 4, dept: 'Computer Science' },
]

/**
 * SubjectsSection — static table of course records. Presentational only.
 */
export default function SubjectsSection() {
  return (
    <SectionPanel
      eyebrow="Subjects"
      title="Courses in this term"
      description="Each subject carries the credit hours used for load balancing."
    >
      <div className="overflow-hidden rounded-2xl border border-glassBorder">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-glassBorder bg-white/[0.03]">
              <th className="px-4 py-3 font-body text-xs font-medium uppercase tracking-wide text-white/45">
                Code
              </th>
              <th className="px-4 py-3 font-body text-xs font-medium uppercase tracking-wide text-white/45">
                Subject
              </th>
              <th className="px-4 py-3 font-body text-xs font-medium uppercase tracking-wide text-white/45">
                Credits
              </th>
              <th className="px-4 py-3 font-body text-xs font-medium uppercase tracking-wide text-white/45">
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {SUBJECTS.map((subject) => (
              <tr key={subject.code} className="border-b border-glassBorder last:border-b-0">
                <td className="px-4 py-3 font-body text-sm font-medium text-signal">
                  {subject.code}
                </td>
                <td className="px-4 py-3 font-body text-sm text-white/80">
                  {subject.name}
                </td>
                <td className="px-4 py-3 font-body text-sm text-white/60">
                  {subject.credits}
                </td>
                <td className="px-4 py-3">
                  <Chip>{subject.dept}</Chip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionPanel>
  )
}
