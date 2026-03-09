import express from 'express';
import { upload } from '../config/multer.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/image', authenticate, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({ url: `/uploads/${req.file.filename}` });
});

router.post('/video', authenticate, upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({ url: `/uploads/${req.file.filename}` });
});

router.post('/document', authenticate, upload.single('document'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.json({ url: `/uploads/${req.file.filename}` });
});

router.post('/multiple', authenticate, upload.array('files', 10), (req, res) => {
  if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  const urls = (req.files as Express.Multer.File[]).map(file => `/uploads/${file.filename}`);
  res.json({ urls });
});

export default router;
