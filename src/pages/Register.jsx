import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally, form data would be validated & sent to backend
    alert('User registered successfully!');

    // Redirect to /courses
    navigate('/courses');
  };

  return (
    <div className="register-container">
      <h2>Create Your Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" placeholder="Enter your name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Create a password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" placeholder="Confirm your password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
