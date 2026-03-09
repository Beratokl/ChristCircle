import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to ChristCircle</h1>
      <p>A community for Christians to connect, learn, and grow together.</p>
      
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <nav style={{ marginTop: '2rem' }}>
        <Link to="/chat" style={{ marginRight: '1rem' }}>Chat</Link>
        <Link to="/teachings" style={{ marginRight: '1rem' }}>Teachings</Link>
        <Link to="/prayers" style={{ marginRight: '1rem' }}>Prayer Requests</Link>
        <Link to="/events" style={{ marginRight: '1rem' }}>Events</Link>
        <Link to="/bible" style={{ marginRight: '1rem' }}>Bible</Link>
        <Link to="/consultations" style={{ marginRight: '1rem' }}>Consultations</Link>
        {user?.role === 'admin' && <Link to="/admin">Admin</Link>}
      </nav>
    </div>
  );
}
