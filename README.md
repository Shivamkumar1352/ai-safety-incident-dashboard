# 🛰️ AI Safety Incidents Tracker

An AI Incident Tracking application built with **React**, **Material UI**, and **Three.js** (animated starfield background ✨).

It lets users:
- Add, filter, and sort AI safety incidents.
- Toggle between Light and Dark themes.
- Enjoy a beautiful animated starfield background that adapts to the theme.

---

[**Live Preview**](https://shivamkumar1352.github.io/ai-safety-incident-dashboard/)

## 🚀 Tech Stack

- **React** (Create React App)
- **Material UI** (`@mui/material`)
- **Three.js** with React (`@react-three/fiber`, `@react-three/drei`)
- **Maath** (for random star generation)
- **Context API** (for theme management)

---

## 📥 Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/ai-safety-incidents.git
cd ai-safety-incidents
```

2. **Install Dependencies**

```bash
npm install
```

Make sure you have these required packages:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @react-three/fiber @react-three/drei
npm install maath
```

3. **Start the Development Server**

```bash
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Project Structure

```
src/
 ├── components/
 │    ├── IncidentFilter.jsx
 │    ├── IncidentForm.jsx
 │    ├── IncidentList.jsx
 │    ├── ThemeToggle.jsx
 │    └── StarsCanvas.jsx
 │
 ├── context/
 │    └── ThemeContext.jsx
 │
 ├── types/
 │    └── incidents.ts (or .ts for type definitions)
 │
 ├── App.jsx
 └── index.js
```

---

## 🌟 Features

- Add new incidents via a form.
- Filter incidents by severity.
- Sort incidents by newest or oldest.
- Responsive, modern UI using Material-UI.
- Animated starfield background that changes color based on theme (light/dark).

---

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Material UI Documentation](https://mui.com/)
- [Three.js Documentation](https://threejs.org/)

---
