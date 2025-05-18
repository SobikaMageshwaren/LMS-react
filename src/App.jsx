import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Assessment from './pages/Assessment';

function App() {
  return (
    <>
      {/* Header with App name */}
      <header
        style={{
          padding: '1rem',
          backgroundColor: '#282c34',
          color: 'white',
          marginBottom: 0,
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0 }}>My LMS App</h1>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main style={{ padding: '1rem' }}>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* User registration page */}
          <Route path="/register" element={<Register />} />

          {/* Courses list page */}
          <Route path="/courses" element={<Courses />} />

          {/* Specific course details */}
          <Route path="/courses/:id" element={<CourseDetails />} />

          {/* Assessment for a course */}
          <Route path="/assessment/:courseId" element={<Assessment />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
