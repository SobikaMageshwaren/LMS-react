import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        padding: '0.75rem 1rem',
        borderBottom: '2px solid #ccc',
        backgroundColor: '#004080',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          marginRight: '1.5rem',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Home
      </Link>
      <Link
        to="/register"
        style={{
          color: 'white',
          marginRight: '1.5rem',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Register
      </Link>
      <Link
        to="/courses"
        style={{
          color: 'white',
          marginRight: '1.5rem',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Courses
      </Link>
    </nav>
  );
}
