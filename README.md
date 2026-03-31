🎨 AvanishBlogs-frontend

Frontend application for **AvanishBlogs**, a modern full-stack blogging platform.
Built with React and modern tooling to deliver a fast, responsive, and user-friendly reading and writing experience.

The application integrates with a REST API to provide authentication, blog management, and dynamic content rendering.

---

## ✨ Features

* 📝 Create, edit, and delete blog posts
* 🔐 Authentication (Login / Signup UI)
* 📖 Blog listing with detailed article pages
* 🖼️ Image upload preview support
* 🔎 Search and browse posts
* 📱 Fully responsive design
* ⚡ Fast performance using Vite
* 🎯 Clean and reusable component structure
* 🌐 API integration with backend
* 💡 Modern UI design principles

---

## 🛠️ Tech Stack

* **React.js** – UI library
* **Vite** – Fast build tool
* **JavaScript (ES6+)**
* **CSS / Tailwind CSS**
* **Axios / Fetch API** – API communication
* **React Router** – Page routing
* **Context API / State management**
* **Responsive Design**

---

## 📂 Project Structure

```
AvanishBlogs-frontend
│
├── public                     # Static files
│
├── src
│   ├── api                    # API configuration and endpoints
│   ├── assets                 # Images, icons, static media
│   ├── components             # Reusable UI components
│   ├── Context                # React Context for global state
│   ├── data                   # Static or mock data
│   ├── hooks                  # Custom React hooks
│   ├── Pages                  # Application pages
│   ├── redux                  # Redux store and slices
│   ├── services               # Business logic and API services
│   ├── Styles                 # Global and modular styles
│   ├── utils                  # Helper and utility functions
│
│   ├── App.css                # App level styles
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
│
├── .gitignore
├── eslint.config.js           # Linting configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── package-lock.json
├── postcss.config.mjs         # PostCSS configuration
├── vite.config.js             # Vite configuration
└── README.md
```

---

## ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/your-username/AvanishBlogs-frontend.git

# Go to project folder
cd AvanishBlogs-frontend

# Install dependencies
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 🔗 Backend API Setup

Make sure backend server is running.

Update API base URL if needed:

```javascript
const API_URL = "http://localhost:5000/api";
```

---

## 🌍 Environment Variables

Create `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

---

## 📱 Key Pages

* 🏠 Home page (blog feed)
* 📄 Blog details page
* ✍️ Create blog page
* 🔑 Login / Signup page
* 📬 Contact page
* 👤 User related UI

---

## 📈 Future Improvements

* 🌙 Dark mode
* 🔖 Bookmark posts
* ❤️ Like and comment system
* 🔍 Advanced search & filters
* 🧑 Author profile page
* 📊 Blog analytics dashboard
* ⚙️ Rich text editor

---

## 👨‍💻 Author

**Avanish Maurya**

Aspiring Full Stack Developer focused on building real-world applications and documenting the journey.

---

