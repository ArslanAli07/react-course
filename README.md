# React Course - Social Posts App

A modern React application built with Vite, React Router, and CSS Modules. This project demonstrates fundamental React concepts including component composition, state management, routing, and API integration.

## 🚀 Features

- **Create Posts**: Add new posts with author name and content
- **View Posts**: Browse through a list of all posts
- **Post Details**: View individual post details on separate pages
- **Modal Components**: Elegant modal interface for creating posts
- **Routing**: Client-side routing with React Router DOM
- **Backend Integration**: RESTful API with Express backend
- **Responsive Design**: Modern, responsive UI with CSS Modules

## 🛠️ Tech Stack

- **Frontend**:

  - React 19.1.1
  - React Router DOM 7.9.6
  - Vite 7.1.7
  - CSS Modules
  - React Icons 5.5.0

- **Backend**:
  - Express.js
  - Node.js
  - File-based storage

## 📦 Project Structure

```
react-course/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── MainHeader.jsx
│   │   ├── Modal.jsx
│   │   ├── Post.jsx
│   │   └── PostsLists.jsx
│   ├── routes/             # Route components
│   │   ├── NewPost.jsx     # Create new post
│   │   ├── PostDetails.jsx # View post details
│   │   ├── Posts.jsx       # Posts listing
│   │   └── RootLayout.jsx  # Layout wrapper
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── dummy-backend/          # Express backend server
│   ├── app.js              # Server setup
│   ├── data/               # Data management
│   └── posts.json          # Posts storage
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ArslanAli07/react-course.git
cd react-course
```

2. Install frontend dependencies:

```bash
npm install
```

3. Install backend dependencies:

```bash
cd dummy-backend
npm install
cd ..
```

### Running the Application

⚠️ **Important**: You must run TWO separate terminals simultaneously for the app to work!

#### Terminal 1 - Backend Server:

```bash
cd dummy-backend
npm start
```

The backend will run on `http://localhost:8080`

#### Terminal 2 - Frontend Development Server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use)

> **Note**: Both servers must be running at the same time. The frontend fetches data from the backend API on port 8080.

## 📝 Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend

- `npm start` - Start Express server (port 8080)

## 🎯 Key Learning Concepts

This project covers:

1. **React Fundamentals**

   - Functional Components
   - Props and State
   - Event Handling
   - Conditional Rendering

2. **React Router**

   - Nested Routes
   - Route Parameters
   - Loaders for data fetching
   - Actions for form handling

3. **Styling**

   - CSS Modules for scoped styling
   - Component-level styling

4. **API Integration**

   - Fetch API
   - Loading states
   - Error handling

5. **Component Patterns**
   - Modal overlays
   - Form handling
   - List rendering

## 🌐 API Endpoints

- `GET /posts` - Fetch all posts
- `GET /posts/:id` - Fetch a specific post
- `POST /posts` - Create a new post

## 📄 License

This project is open source and available for learning purposes.

## 👨‍💻 Author

**Arslan Ali**

---

Built with ❤️ while learning React
