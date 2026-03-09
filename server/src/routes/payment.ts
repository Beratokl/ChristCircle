import express from 'express';
import { createCheckoutSession, createDonation, handleWebhook } from '../services/stripe.js';
import { authenticate } from '../middleware/auth.js';
import Book from '../models/Book.js';

const router = express.Router();

router.post('/create-checkout', authenticate, async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await Book.findById(bookId);
    
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const session = await createCheckoutSession(
      bookId,
      book.title,
      book.price,
      `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      `${process.env.CLIENT_URL}/payment/cancel`
    );

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    res.status(500).json({ message: 'Payment error' });
  }
});

router.post('/donate', authenticate, async (req, res) => {
  try {
    const { amount, email } = req.body;
    const paymentIntent = await createDonation(amount, email);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Donation error' });
  }
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const signature = req.headers['stripe-signature'] as string;
    const event = await handleWebhook(req.body, signature);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      const bookId = session.metadata.bookId;
      // Update book purchase in database
      await Book.findByIdAndUpdate(bookId, {
        $push: { purchases: session.customer }
      });
    }

    res.json({ received: true });
  } catch (error) {
    res.status(400).json({ message: 'Webhook error' });
  }
});

export default router;
