<<<<<<< HEAD
# HabitTracker

# 📋 HabitForge – A Frontend-Only Multi-User Habit Tracker

HabitForge is a beautiful, responsive, and fully frontend-based habit tracker that allows multiple users to sign up using their mobile number and OTP-style password. Each user can add, track, and delete their daily habits in a weekly view — all data is stored locally using `localStorage`.

> ✅ No backend, no database — 100% offline and persistent!

---

Strucutre of the App
App
├── AuthContext (global)
├── HabitContext (global)
├── Routes (React Router)
│   ├── /login → Login Page
│   └── /dashboard → Habit Tracker
│
└── Components
    ├── HabitForm      (Add habit UI)
    ├── HabitList      (Renders all habits)
    └── HabitCard      (Toggles Mon–Sun)
=======
# React + Vite


## Features

- **Login / Signup with Phone + 4-digit Password**
- **Multi-user support** using localStorage
- **Create new habits** with name, category, color
- **Track habits Mon–Sun** using toggle buttons
- **Streak count** next to each habit
- 🗑**Delete individual habits**
- **Responsive UI** (Mobile + Desktop)
- ✅ All data persisted via localStorage

---
Live Link : https://habittrackerrrrr.vercel.app/

## 🛠️ Tech Stack

| Tool         | Purpose                        |
|--------------|---------------------------------|
| React        | UI framework (functional only)  |
| React Router | Routing (Login / Dashboard)     |
| Context API  | Auth + Habit state management   |
| localStorage | Data persistence (per user)     |
| Tailwind CSS | Utility-first responsive styling|
| UUID         | Unique IDs for each habit       |
| React Icons  | Icon for delete habit           |

---


---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mahak24342/HabitTrackerr.git

### install dependencies
npm install

### start the dev server
npm run dev















