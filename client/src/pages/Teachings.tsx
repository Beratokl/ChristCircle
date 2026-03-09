import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Teachings() {
  const [teachings, setTeachings] = useState([]);

  useEffect(() => {
    axios.get('/api/teachings').then(res => setTeachings(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Teachings & Books</h1>
      <div>
        {teachings.map((teaching: any) => (
          <div key={teaching._id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
            <h3>{teaching.title}</h3>
            <p>{teaching.content.substring(0, 200)}...</p>
            <small>Type: {teaching.type} | Views: {teaching.views}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
