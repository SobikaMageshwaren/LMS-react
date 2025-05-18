import { useParams, Link } from 'react-router-dom';
import './CourseDetails.css';

const courseData = {
  1: {
    title: 'React Fundamentals',
    description: 'Learn the basics of building UIs with React, including components, props, state, and hooks.',
    instructor: 'John Doe',
    duration: '6 weeks',
    skills: ['JSX', 'Hooks', 'Component Lifecycle']
  },
  2: {
    title: 'Advanced JavaScript',
    description: 'Explore advanced JavaScript concepts like closures, async/await, promises, and prototypal inheritance.',
    instructor: 'Jane Smith',
    duration: '4 weeks',
    skills: ['Promises', 'Closures', 'Async/Await']
  },
  3: {
    title: 'Web Design Essentials',
    description: 'Master the fundamentals of HTML, CSS, and responsive design.',
    instructor: 'Sarah Lee',
    duration: '3 weeks',
    skills: ['HTML', 'CSS', 'Flexbox']
  },
  4: {
    title: 'Python for Beginners',
    description: 'Get started with Python programming and basic syntax.',
    instructor: 'Mike Johnson',
    duration: '5 weeks',
    skills: ['Variables', 'Loops', 'Functions']
  },
  5: {
    title: 'Data Structures in C',
    description: 'Understand memory management and data structure implementation using C.',
    instructor: 'Priya Verma',
    duration: '6 weeks',
    skills: ['Pointers', 'Linked Lists', 'Trees']
  },
  6: {
    title: 'MongoDB Basics',
    description: 'Explore the basics of NoSQL and how to use MongoDB for document storage.',
    instructor: 'Rahul Mehta',
    duration: '3 weeks',
    skills: ['CRUD', 'Collections', 'Indexes']
  },
  7: {
    title: 'Machine Learning Intro',
    description: 'An introduction to ML concepts and building your first model.',
    instructor: 'Dr. Neha Kapoor',
    duration: '8 weeks',
    skills: ['Supervised Learning', 'Scikit-learn', 'Data Preprocessing']
  },
  8: {
    title: 'Git & GitHub Essentials',
    description: 'Learn how to manage code using Git and collaborate on GitHub.',
    instructor: 'Karan Patel',
    duration: '2 weeks',
    skills: ['Commits', 'Branches', 'Merging']
  },
};

export default function CourseDetails() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="course-details-container">
      <h2>{course.title}</h2>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Skills You’ll Learn:</strong></p>
      <ul>
        {course.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
      <Link to={`/assessment/${id}`} className="start-assessment-btn">Start Assessment</Link>
    </div>
  );
}
