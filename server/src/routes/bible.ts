import express from 'express';
import { getVerse, getVerseOfTheDay, searchBible } from '../services/bible.js';

const router = express.Router();

router.get('/verse/:reference', async (req, res) => {
  try {
    const verse = await getVerse(req.params.reference);
    res.json(verse);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch verse' });
  }
});

router.get('/verse-of-the-day', async (req, res) => {
  try {
    const verse = await getVerseOfTheDay();
    res.json(verse);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch verse of the day' });
  }
});

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ message: 'Query parameter required' });
    }
    const results = await searchBible(q as string);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Search failed' });
  }
});

export default router;
