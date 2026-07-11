import {
  LayoutDashboard,
  Building2,
  CalendarDays,
  Clock,
  BookOpen,
  Users,
  DoorOpen,
  SlidersHorizontal,
  Wand2,
} from 'lucide-react'

/**
 * Static configuration for the workspace sidebar.
 * Presentational data only — no computation or business rules.
 */
export const WORKSPACE_SECTIONS = [
  {
    id: 'overview',
    label: 'Project Overview',
    icon: LayoutDashboard,
    description: 'Summary, progress, and recent activity for this project.',
  },
  {
    id: 'university',
    label: 'University Details',
    icon: Building2,
    description: 'Institution profile, departments, and academic year.',
  },
  {
    id: 'working-days',
    label: 'Working Days',
    icon: CalendarDays,
    description: 'Define the days of the week included in scheduling.',
  },
  {
    id: 'lecture-slots',
    label: 'Lecture Slots',
    icon: Clock,
    description: 'Time blocks available for lectures each working day.',
  },
  {
    id: 'subjects',
    label: 'Subjects',
    icon: BookOpen,
    description: 'Courses, credit hours, and section requirements.',
  },
  {
    id: 'faculty',
    label: 'Faculty',
    icon: Users,
    description: 'Instructors, availability, and teaching load limits.',
  },
  {
    id: 'rooms',
    label: 'Rooms',
    icon: DoorOpen,
    description: 'Classrooms, labs, and their capacity or equipment.',
  },
  {
    id: 'ai-settings',
    label: 'AI Settings',
    icon: SlidersHorizontal,
    description: 'Optimization preferences for the scheduling engine.',
  },
  {
    id: 'generate',
    label: 'Generate Timetable',
    icon: Wand2,
    description: 'Run the AI engine and review the generated timetable.',
  },
]
