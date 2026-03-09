import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events').then(res => setEvents(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Upcoming Events</h1>
      <div>
        {events.map((event: any) => (
          <div key={event._id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(event.startDate).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <p>{event.attendees.length} attending</p>
          </div>
        ))}
      </div>
    </div>
  );
}
