# 🏗️ SYSTEM ARCHITECTURE

## SchedulAI

AI Powered University Timetable Management Platform

---

# Frontend

React

Pages

- Landing
- Workspace
- Dashboard
- Projects

Components

- Sidebar
- Topbar
- Cards
- Forms
- Tables
- Dialogs

State

React Context

ProjectContext

---

# Backend

Spring Boot

Modules

- Project
- Faculty
- Subject
- Room
- Timetable
- AI Engine

---

# Database

PostgreSQL

Tables

Projects

Departments

Semesters

Divisions

Subjects

Faculty

Rooms

LectureSlots

WorkingDays

AISettings

Timetables

---

# AI Engine

Google OR-Tools

Hard Constraints

- Faculty Clash
- Student Clash
- Room Clash
- Holiday Rules
- Weekly Lecture Count

Soft Constraints

- Faculty Preference
- Minimum Idle Time
- Balanced Workload
- Classroom Utilization

---

# Workflow

Landing

↓

Workspace

↓

Generate

↓

Dashboard