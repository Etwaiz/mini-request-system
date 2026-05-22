# Mini Request System

A lightweight, modern React single-page application (SPA) designed to manage user requests with role-based dashboards (User and Manager). Built using React 19, TypeScript, Vite, and React Context API.

## 🚀 Live Demo
*Link to your deployed version (e.g., Vercel or GitHub Pages)*
👉 [View Live Demo](https://YOUR_SUBDOMAIN.vercel.app) 

---

## 🛠️ Features

- **Role-Based Access Control (RBAC):** Toggle instantly between `User` and `Manager` roles via the header switcher.
- **User Dashboard:** - Create new requests with a title and detailed problem description.
  - View a personal list of submitted requests with dynamic status indicators.
- **Manager Dashboard:**
  - View all submitted requests in a clean grid system.
  - Filter requests globally or by their specific status (`All`, `New`, `In Progress`, `Done`).
  - Update request states dynamically (*Accept Request* / *Complete*).
- **Persistent State:** Uses `localStorage` to save user roles and request data across page reloads.
- **Robust Architecture:** Complete decoupling of state logic, custom hooks, and presentation views to satisfy Vite Fast Refresh and strict ESLint configurations.

---

## 🧰 Tech Stack

- **Framework:** React 19
- **Bundler & Build Tool:** Vite
- **Language:** TypeScript (with strict module verification)
- **State Management:** React Context API + Custom Hooks
- **Styling:** Vanilla CSS (Custom properties, Flexbox, CSS Grid)

---

## 📂 Project Structure

```text
src/
├── context/
│   ├── AppContext.tsx   # Contains the global Context Provider component
│   └── useApp.tsx       # Contains Context definition, types, and custom hook
├── modules/
│   ├── manager/
│   │   └── ManagerDashboard.tsx  # Manager workflow and request filtering
│   └── user/
│   │   └── UserDashboard.tsx     # Form submission and user request lists
├── types/
│   └── index.ts         # Shared TypeScript interfaces and union types
├── App.tsx              # Main orchestrator component with role routing
├── index.css            # Clean, modern UI global design styles
└── main.tsx             # Application entry point wrapped in AppContextProvider