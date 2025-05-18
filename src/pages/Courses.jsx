import { Link } from 'react-router-dom';
import './Courses.css';

const courses = [
  { id: '1', title: 'React Fundamentals', description: 'Learn the basics of building UIs with React.' },
  { id: '2', title: 'Advanced JavaScript', description: 'Deep dive into JavaScript and its core concepts.' },
  { id: '3', title: 'Web Design Essentials', description: 'Master HTML, CSS, and design systems.' },
  { id: '4', title: 'Python for Beginners', description: 'Start coding with Python from scratch.' },
  { id: '5', title: 'Data Structures in C', description: 'Understand memory and efficiency in C programming.' },
  { id: '6', title: 'MongoDB Basics', description: 'Learn to use NoSQL with MongoDB.' },
  { id: '7', title: 'Machine Learning Intro', description: 'Build your first ML model and understand algorithms.' },
  { id: '8', title: 'Git & GitHub Essentials', description: 'Version control and collaboration using Git.' },
];

export default function Courses() {
  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <div className="course-scroll-wrapper">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
