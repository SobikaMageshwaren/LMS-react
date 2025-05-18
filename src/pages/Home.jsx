import { Link } from 'react-router-dom';
import './Home.css';
import lmsImage from '../assets/home.jpg'; // You need to add this image in src/assets/

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-text">
        <h1>
          Welcome to <span className="highlight">Learnify LMS</span>
        </h1>
        <p>
          Master new skills, track your progress, and take assessments to grow your knowledge!
        </p>

        <div className="home-buttons">
          <Link to="/register">
            <button className="home-btn">Register</button>
          </Link>
          <Link to="/courses">
            <button className="home-btn">Browse Courses</button>
          </Link>
        </div>
      </div>

      <div className="home-image">
        <img src={lmsImage} alt="Learning Management System Illustration" />
      </div>
    </div>
  );
}
