# 🎓 Edumate - Online Group Study Platform

A collaborative MERN stack platform designed for students to create, submit, and assess group study assignments.

🌐 **Live Site:** [https://online-group-study-e3eaf.web.app](https://online-group-study-e3eaf.web.app)


## 📌 Purpose

Edumate enables learners to:
- Create academic assignments
- Submit answers with notes and links
- Receive peer feedback and marks
- Foster collaborative and self-paced group learning


## ✨ Key Features

- 🔐 **JWT-Based Authentication**  
  Secure login & registration system with role-based access.

- 📄 **Assignment Management**  
  Create, update, delete, and browse assignments with details like marks, difficulty, due date, and description.

- 📥 **Submission System**  
  Students can submit answers with a Google Docs link and note. Submissions are initially marked as "Pending".

- 📊 **Assessment by Peers**  
  Examiners (not the original submitter) can review and mark pending submissions with feedback.

- 📃 **Attempt Tracking**  
  Users can view their attempted assignments along with status, obtained marks, and given feedback.

- 🔒 **Role-Based Access Control**  
  Certain pages and features are restricted based on the user role and ownership.

- 🌓 **Dark/Light Theme Toggle**  
  Smooth and responsive theme switching across the app.

- 📱 **Responsive Design**  
  Mobile-first layout that adapts across all devices.

---

## 🛠️ Tech Stack

### 🚀 Frontend:
- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI**
- **Axios**
- **React Hook Form**
- **React DatePicker**
- **SweetAlert2**
- **AOS (Animate on Scroll)**

### 🌐 Backend:
- **Express.js**
- **MongoDB**
- **Mongoose**
- **CORS**
- **Dotenv**
- **jsonwebtoken**
- **bcryptjs**

---

## 📦 NPM Packages Used

> Frontend:
- `react-router-dom`  
- `axios`  
- `react-hook-form`  
- `sweetalert2`  
- `react-datepicker`  
- `aos`  
- `react-icons`

> Backend:
- `express`  
- `mongoose`  
- `cors`  
- `dotenv`  
- `jsonwebtoken`  



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
