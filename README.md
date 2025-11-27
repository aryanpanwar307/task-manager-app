# Task Manager App

A clean Task Manager web application built using **React**, featuring:

* Drag and Drop task management using `@hello-pangea/dnd`
* Column-based workflow (To Do → In Progress → Done)
* Responsive UI, Dark Theme and Animations
* Create, move, and delete tasks
* Deployed on Vercel

---

## 🚀 Live Demo

🔗 **[https://limetray-taskmanager.vercel.app/](https://limetray-taskmanager.vercel.app/)**

Click the link above to try the application.
<img width="732" height="589" alt="Screenshot 2025-11-26 202654" src="https://github.com/user-attachments/assets/dcbde597-5010-49a4-b2f9-bd824c640b90" />


---

## 🖼️ Features

### ✅ Basic Features

* Add tasks
* Mark tasks as completed
* Delete tasks
* Filter tasks (All, Completed, Pending)
* Persist tasks using Local Storage

### ✅ Advanced React Features

* Custom `useLocalStorage` hook
* Global state using **Context API** (no prop drilling)
* Performance optimizations:

  * `React.memo`
  * `useCallback`
  * `useMemo`
* Form validation (prevent empty task submissions)

### ✅ UI & CSS Enhancements

* Dark / Light mode toggle (theming)
* Smooth animations for adding/removing tasks
* Fully responsive design (mobile-first)
* Drag and drop tasks using `@hello-pangea/dnd`

---

## 🛠️ Tech Stack

**Frontend:**

* React 19
* @hello-pangea/dnd (React Beautiful DnD maintained fork)
* CSS / Flexbox
* react-scripts (CRA)

**Deployment:**

* Vercel

---

## ⚠️ Why @hello-pangea/dnd?

The original `react-beautiful-dnd` library:

* does not support React 19
* is no longer maintained
* causes installation conflicts

`@hello-pangea/dnd` is:

* actively maintained
* fully compatible with React 18/19
* API compatible with react-beautiful-dnd

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install drag and drop library:

```bash
npm install @hello-pangea/dnd
```

---

## ▶️ Run Locally

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 🧱 Folder Structure

```
src/
│
├── components/
│   ├── FilterButtons.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   ├── ThemeToggle.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── hooks/
│   └── useLocalStorage.jsx
│
├── App.js
├── index.js
└── styles.css
```

---

## 🧩 Drag and Drop Usage Example

```js
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
```

The logic remains identical to `react-beautiful-dnd`.

---

## 🚢 Deployment

The app is deployed using **Vercel** with automatic builds from the project.

To deploy manually:

```bash
npm run build
vercel deploy
```

---

## ✅ Summary

This project demonstrates:

* React component architecture
* State management
* Drag and drop interactions
* Deployment workflow

---

## 🌟 Future Improvements

* Backend integration
* User authentication
* Persistent task storage (DB)
* Multiple boards

---

## 🙌 Author

Created by **Aryan Panwar**
