# ♿ ACCESSMISSION

### Don't just reach the destination. Complete the mission.

> **ACCESSMISSION is an accessibility-focused mission completion system that evaluates whether a person can actually complete a real-world task based on their individual accessibility needs, environmental conditions, and mission requirements.**

---

## 🚀 Overview

Traditional accessibility applications mainly answer:

> **"Is this place accessible?"**

ACCESSMISSION asks a more important question:

> **"Can this person actually complete their mission?"**

A location may technically be accessible, but a person's mission can still fail because of:

- An unavailable elevator
- A blocked ramp
- An inaccessible entrance
- A closed facility
- A broken accessibility feature
- A route that conflicts with the user's needs
- A critical accessibility dependency becoming unavailable

ACCESSMISSION combines the user's accessibility profile, mission requirements, and real-world conditions to determine mission readiness and dynamically recover when a critical accessibility condition fails.

---

# 💡 Problem Statement

Accessibility information is often location-based rather than **person-and-task-based**.

For example:

A college building may be marked as "accessible", but a wheelchair user attending an exam on the second floor may still be unable to complete the mission if the only accessible elevator is unavailable.

Therefore, accessibility should not only be evaluated at the destination level.

It should be evaluated across the **entire mission journey**.

### The core problem:

```text
PERSON'S ACCESSIBILITY NEED
            +
MISSION REQUIREMENTS
            +
REAL-WORLD CONDITIONS
            =
MISSION OUTCOME
```

---

# 🎯 Our Solution

ACCESSMISSION transforms accessibility from a simple location property into a **mission completion system**.

The system:

1. Creates a personalized accessibility profile.
2. Understands the user's accessibility requirements.
3. Allows the user to create a real-world mission.
4. Decomposes the mission into actionable steps.
5. Identifies accessibility dependencies.
6. Calculates mission readiness.
7. Provides a personalized accessible route.
8. Monitors conditions during mission execution.
9. Detects critical accessibility failures.
10. Activates a recovery strategy.
11. Allows the user to continue and complete the mission.

---

# ⭐ Key Innovation

## Accessibility is not just about the destination.

ACCESSMISSION introduces the concept of:

### **Mission Accessibility**

A mission is considered accessible only when the user can realistically complete all the required steps.

For example:

```text
Attend Exam
     ↓
Enter Campus
     ↓
Reach Block C
     ↓
Reach Floor 2
     ↓
Use Elevator
     ↓
Reach Room 204
     ↓
Attend Exam
```

If the user cannot use stairs and the elevator becomes unavailable:

```text
MISSION
   ↓
CRITICAL DEPENDENCY FAILURE
   ↓
MISSION AT RISK
   ↓
RECOVERY ENGINE
   ↓
ALTERNATIVE
   ↓
MISSION CONTINUES
```

---

# 🧠 Core Features

## 1. Personal Accessibility Profile

Users can specify requirements such as:

- Mobility needs
- Vision needs
- Hearing needs
- Cognitive/communication needs
- Other accessibility requirements

Users can also configure preferences including:

- Avoid stairs
- Prefer elevators
- Prefer ramps
- Minimize walking
- Prefer rest points
- Voice instructions
- Large text
- High contrast
- Visual alerts
- Simple instructions

---

## 2. Mission Creation

Users create missions based on real-world tasks.

Example:

> **Attend my exam in Block C, Room 204.**

The system treats this as a task that must actually be completed rather than simply navigating to a location.

---

## 3. AI Mission Decomposition

The mission is broken into smaller actionable steps.

Example:

```text
Mission:
Attend my exam in Block C, Room 204.

AI-generated steps:

1. Reach campus
2. Enter campus
3. Reach Block C
4. Reach Floor 2
5. Find Room 204
```

This allows accessibility to be evaluated at every stage.

---

# 🔗 Accessibility Dependency Engine

ACCESSMISSION identifies infrastructure that is critical to completing a mission.

Example:

```text
Attend Exam
      │
      ▼
Reach Floor 2
      │
      ▼
  Elevator 2
      │
      ▼
  Room 204
```

For a user who cannot use stairs:

### Elevator 2 becomes a

## 🔴 CRITICAL DEPENDENCY

This means that if Elevator 2 fails, the system knows that the mission itself is at risk.

---

# 📊 Mission Readiness

Before starting a mission, ACCESSMISSION evaluates the known accessibility conditions.

Example:

```text
Mission Readiness: 91%

✓ Accessible Entrance
✓ Ramp A
✓ Elevator 2
✓ Accessible Corridor
✓ Room 204
```

This provides the user with a clear understanding of whether the mission is ready to begin.

---

# 🧭 Personalized Navigation

Routes are generated based on the user's accessibility profile.

A user who cannot use stairs should not receive a route containing stairs simply because it is the shortest route.

Instead, the system prioritizes relevant accessibility requirements such as:

- Step-free paths
- Elevators
- Ramps
- Accessible entrances
- Accessible corridors
- Reduced walking where required

---

# 🚨 Live Barrier Detection

Accessibility conditions can change while a mission is in progress.

For example:

```text
Elevator 2
🟢 AVAILABLE
```

can become:

```text
Elevator 2
🔴 UNAVAILABLE
```

The system then evaluates the effect of that failure on the current mission.

---

# 🔄 Mission Recovery Engine

Instead of simply telling the user:

> "This route is unavailable."

ACCESSMISSION attempts to recover the mission.

Example:

```text
Elevator 2 unavailable
        ↓
Mission At Risk
        ↓
Recovery Engine
        ↓
Alternative Elevator
        ↓
Continue Mission
        ↓
Mission Completed
```

Possible recovery options include:

- Alternative accessible route
- Alternative elevator
- Request assistance
- Change route
- Change destination where appropriate

---

# 🏫 Institution Impact

ACCESSMISSION can also help institutions understand accessibility problems.

Institutions can monitor:

- Accessibility barriers
- Frequently reported issues
- Facility conditions
- Mission failures
- Critical accessibility dependencies
- Accessibility improvement requirements

This changes accessibility management from reactive reporting to **mission-impact analysis**.

---

# 🎬 Demonstration Scenario

## College Campus Mission

Our prototype demonstrates a college campus environment containing:

```text
COLLEGE CAMPUS

├── Entrance A
│   └── Ramp A
│
├── Entrance B
│
├── Block A
│
├── Block B
│
└── Block C
    │
    ├── Floor 1
    │   └── Administration
    │       └── Counter 4
    │
    └── Floor 2
        ├── Elevator 2
        ├── Staircase
        └── Room 204
```

### User profile

The user:

- Cannot use stairs
- Requires an accessible route
- Prefers elevators
- Prefers ramps
- Wants simple instructions

### Mission

> **Attend my exam in Block C, Room 204.**

### Initial condition

```text
Elevator 2 → AVAILABLE
Mission → READY
Readiness → 91%
```

### Failure simulation

```text
Elevator 2 → UNAVAILABLE
Mission → AT RISK
```

### Recovery

The recovery engine identifies an alternative option.

```text
Alternative Elevator
        ↓
Mission Continues
        ↓
MISSION COMPLETED
```

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       USER          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Accessibility       │
                    │ Profile             │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Mission Creation    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Mission Intelligence│
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Dependency Engine   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Mission Readiness   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Mission Execution   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Barrier Detection   │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
               No Barrier           Barrier Detected
                    │                     │
                    │                     ▼
                    │             ┌─────────────────┐
                    │             │ Recovery Engine │
                    │             └────────┬────────┘
                    │                      │
                    └──────────┬───────────┘
                               ▼
                    ┌─────────────────────┐
                    │ Mission Completed   │
                    └─────────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- JavaScript
- JSX
- CSS
- React Router

## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcryptjs

## Database

- MySQL
- phpMyAdmin

## Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

# 🗄️ Database Design

The system uses a relational database to manage users, accessibility information, missions, facilities, routes, barriers, and mission outcomes.

Main entities include:

```text
Users
Accessibility Profiles
Accessibility Preferences
Institutions
Buildings
Locations
Facilities
Accessibility Conditions
Missions
Mission Steps
Mission Dependencies
Routes
Route Steps
Barrier Reports
Community Confirmations
Mission Events
Help Requests
Mission Feedback
Notifications
```

---

# 👥 User Roles

## User

Users can:

- Register and login
- Create accessibility profiles
- Create missions
- Analyze missions
- View dependencies
- Check readiness
- Execute missions
- Report barriers
- Recover missions
- View completed missions

## Institution Administrator

Administrators can:

- Monitor missions
- Manage buildings
- Manage facilities
- Monitor accessibility barriers
- View accessibility analytics
- Identify accessibility improvement areas

## System Administrator

System administrators can manage:

- Users
- Institutions
- System-level information

---

# 🔐 Security

The application uses:

- Password hashing with bcryptjs
- JWT-based authentication
- Protected API routes
- Environment variables for sensitive configuration
- CORS configuration

Sensitive credentials such as database passwords and API keys are stored in `.env` and are not committed to the repository.

---

# ♿ Accessibility by Design

ACCESSMISSION itself is designed with accessibility in mind.

The interface aims to support:

### Blind / Low Vision Users

- Semantic HTML
- Screen-reader-friendly structure
- Voice instructions
- Large controls
- Clear labels

### Deaf / Hard of Hearing Users

- Visual status indicators
- Visual alerts
- Text-based information

### Mobility Accessibility

- Step-free route preference
- Elevator preference
- Ramp preference
- Stair avoidance

### Cognitive Accessibility

- Simple instructions
- Clear step-by-step mission flow
- Reduced visual complexity
- Clear status indicators

---

# 🔄 Complete User Flow

```text
Register
   ↓
Login
   ↓
Accessibility Profile
   ↓
Home Dashboard
   ↓
Create Mission
   ↓
Mission Analysis
   ↓
Accessibility Dependencies
   ↓
Mission Readiness
   ↓
Personalized Route
   ↓
Live Mission
   ↓
Barrier Detection
   ↓
Recovery Engine
   ↓
Mission Completed
```

---

# 💻 Local Installation

## Prerequisites

Install:

- Node.js
- npm
- MySQL
- Git

---

## Clone the Repository

```bash
git clone https://github.com/Shane634/ACCESSMISSION_.git
cd ACCESSMISSION_
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run using the Vite development server.

---

# Backend Setup

Open another terminal:

```bash
cd backend
npm install
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

---

# Environment Configuration

Create:

```text
backend/.env
```

Example:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=accessmission_db
JWT_SECRET=your_secret_key
AI_API_KEY=
```

> Never commit your `.env` file to GitHub.

---

# 🗃️ Database Setup

1. Start MySQL.
2. Open phpMyAdmin.
3. Create the database:

```sql
CREATE DATABASE accessmission_db;
```

4. Import the project database SQL file if provided.
5. Configure the backend `.env` file.
6. Start the backend.

---

# 📱 Prototype

The current prototype demonstrates the complete mission lifecycle:

```text
Accessibility Profile
        ↓
Mission
        ↓
Mission Analysis
        ↓
Accessibility Dependencies
        ↓
Mission Readiness
        ↓
Live Mission
        ↓
Simulated Accessibility Failure
        ↓
Mission Recovery
        ↓
Mission Completion
```

---

# 📸 Screenshots

Screenshots of the application can be added here.

### Home Dashboard

_Add screenshot here_

### Accessibility Profile

_Add screenshot here_

### Mission Analysis

_Add screenshot here_

### Dependency Analysis

_Add screenshot here_

### Mission Readiness

_Add screenshot here_

### Live Mission

_Add screenshot here_

### Mission Recovery

_Add screenshot here_

### Mission Completed

_Add screenshot here_

---

# 🎥 Demo

### Demo Video

_Add your demo video link here_

### Live Deployment

_Add your deployed application link here_

---

# 🐙 Repository

GitHub:

https://github.com/Shane634/ACCESSMISSION_

---

# 🔮 Future Scope

Future versions of ACCESSMISSION can include:

- Real-time computer vision for accessibility barrier detection
- AI-powered surroundings description
- Real-time crowdsourced accessibility conditions
- Indoor positioning
- Voice-first navigation
- Advanced route optimization
- Predictive accessibility failure detection
- Smart wearable integration
- Emergency assistance
- Accessibility heatmaps
- Institution-wide accessibility scoring
- Multi-campus support
- Integration with public transportation
- Multilingual accessibility assistance

---

# 🌍 Social Impact

ACCESSMISSION aims to make accessibility more **personal, dynamic, and outcome-oriented**.

Instead of simply asking:

> "Is this location accessible?"

the system asks:

> **"Can this person complete what they came here to do?"**

This shift can help users plan with greater confidence while helping institutions understand which accessibility barriers actually prevent people from completing important tasks.

---

# 🏆 Why ACCESSMISSION?

### Traditional approach

```text
Location
   ↓
Accessibility Information
```

### ACCESSMISSION

```text
Person
   ↓
Accessibility Needs
   ↓
Mission
   ↓
Dependencies
   ↓
Real-world Conditions
   ↓
Mission Readiness
   ↓
Live Execution
   ↓
Recovery
   ↓
Mission Completed
```

---

# 👨‍💻 Team

### ACCESSMISSION Team

_Add team member names and roles here._

Example:

- **Name** — Frontend / React
- **Name** — Backend / Database
- **Name** — AI / Mission Intelligence
- **Name** — UI/UX / Presentation

---

# 📄 License

This project was developed as a hackathon/academic prototype.

---

## ACCESSMISSION

### Don't just reach the destination. Complete the mission. ♿🚀