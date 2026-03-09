import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PrayerRequests() {
  const [prayers, setPrayers] = useState([]);

  useEffect(() => {
    axios.get('/api/prayers').then(res => setPrayers(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Prayer Requests</h1>
      <div>
        {prayers.map((prayer: any) => (
          <div key={prayer._id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
            <h3>{prayer.title}</h3>
            <p>{prayer.content}</p>
            <small>{prayer.prayers.length} people prayed</small>
          </div>
        ))}
      </div>
    </div>
  );
}
