import { useState } from 'react';
import axios from 'axios';

export default function Bible() {
  const [reference, setReference] = useState('');
  const [verse, setVerse] = useState<any>(null);
  const [verseOfDay, setVerseOfDay] = useState<any>(null);

  const searchVerse = async () => {
    try {
      const res = await axios.get(`/api/bible/verse/${reference}`);
      setVerse(res.data);
    } catch (error) {
      alert('Verse not found');
    }
  };

  const getVerseOfDay = async () => {
    try {
      const res = await axios.get('/api/bible/verse-of-the-day');
      setVerseOfDay(res.data);
    } catch (error) {
      alert('Failed to fetch verse of the day');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Bible</h1>

      <div style={{ marginTop: '2rem' }}>
        <h2>Verse of the Day</h2>
        <button onClick={getVerseOfDay} style={{ padding: '0.5rem 1rem' }}>
          Get Verse of the Day
        </button>
        {verseOfDay && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
            <h3>{verseOfDay.reference}</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{verseOfDay.text}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2>Search Bible</h2>
        <input
          type="text"
          placeholder="e.g., John 3:16 or Psalm 23"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          style={{ padding: '0.5rem', width: '300px', marginRight: '1rem' }}
        />
        <button onClick={searchVerse} style={{ padding: '0.5rem 1rem' }}>
          Search
        </button>

        {verse && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
            <h3>{verse.reference}</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{verse.text}</p>
            <small>Translation: {verse.translation_name}</small>
          </div>
        )}
      </div>
    </div>
  );
}
