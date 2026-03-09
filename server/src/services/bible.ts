import axios from 'axios';

const BIBLE_API_URL = 'https://bible-api.com';

export interface BibleVerse {
  reference: string;
  verses: {
    book_id: string;
    book_name: string;
    chapter: number;
    verse: number;
    text: string;
  }[];
  text: string;
  translation_id: string;
  translation_name: string;
}

export const getVerse = async (reference: string): Promise<BibleVerse> => {
  try {
    const response = await axios.get(`${BIBLE_API_URL}/${reference}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Bible verse');
  }
};

export const getVerseOfTheDay = async (): Promise<BibleVerse> => {
  const verses = [
    'John 3:16',
    'Philippians 4:13',
    'Jeremiah 29:11',
    'Proverbs 3:5-6',
    'Romans 8:28',
    'Psalm 23:1',
    'Isaiah 41:10',
    'Matthew 6:33',
    'Joshua 1:9',
    'Psalm 46:1'
  ];
  
  const today = new Date().getDate();
  const verseIndex = today % verses.length;
  return getVerse(verses[verseIndex]);
};

export const searchBible = async (query: string): Promise<any> => {
  try {
    // Using Bible API for search
    const response = await axios.get(`${BIBLE_API_URL}/${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search Bible');
  }
};
