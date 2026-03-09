import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Consultations() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    axios.get('/api/consultations').then(res => setConsultations(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Consultations</h1>
      <div>
        {consultations.map((consultation: any) => (
          <div key={consultation._id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
            <p>Type: {consultation.type}</p>
            <p>Status: {consultation.status}</p>
            {consultation.scheduledAt && (
              <p>Scheduled: {new Date(consultation.scheduledAt).toLocaleString()}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
