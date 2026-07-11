import SectionPanel from '../SectionPanel.jsx'
import FieldPlaceholder from '../FieldPlaceholder.jsx'

/**
 * UniversityDetailsSection — static layout of institution fields.
 * No form state, validation, or persistence is implemented here.
 */
export default function UniversityDetailsSection() {
  return (
    <SectionPanel
      eyebrow="University Details"
      title="Institution profile"
      description="Basic information used throughout the generated timetable."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FieldPlaceholder label="Institution name" value="Meridian State University" />
        <FieldPlaceholder label="Academic year" value="2026 – 2027" />
        <FieldPlaceholder label="Campus" value="Main Campus" />
        <FieldPlaceholder label="Departments" value="6 departments" hint="Computer Science, Mathematics, Physics, and more" />
        <FieldPlaceholder label="Term" value="Fall Semester" />
        <FieldPlaceholder label="Address" value="221 University Ave, Springfield" />
      </div>
    </SectionPanel>
  )
}
