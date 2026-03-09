import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPastors: 0,
    totalTeachings: 0,
    totalPrayers: 0,
    totalEvents: 0
  });

  useEffect(() => {
    axios.get('/api/admin/stats').then(res => setStats(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Total Users</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalUsers}</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Total Pastors</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalPastors}</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Total Teachings</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalTeachings}</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Prayer Requests</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalPrayers}</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h3>Upcoming Events</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalEvents}</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>Quick Actions</h2>
        <button style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Verify Pastors</button>
        <button style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Moderate Content</button>
        <button style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>View Reports</button>
        <button style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Manage Users</button>
      </div>
    </div>
  );
}
