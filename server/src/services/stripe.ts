import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-12-18.acacia' })
  : null;

export const createPaymentIntent = async (amount: number, currency: string = 'usd') => {
  if (!stripe) throw new Error('Stripe not configured');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency
  });
  return paymentIntent;
};

export const createCheckoutSession = async (
  bookId: string,
  bookTitle: string,
  price: number,
  successUrl: string,
  cancelUrl: string
) => {
  if (!stripe) throw new Error('Stripe not configured');
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: bookTitle
          },
          unit_amount: Math.round(price * 100)
        },
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      bookId
    }
  });
  return session;
};

export const createDonation = async (amount: number, donorEmail: string) => {
  if (!stripe) throw new Error('Stripe not configured');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: 'usd',
    receipt_email: donorEmail,
    metadata: {
      type: 'donation'
    }
  });
  return paymentIntent;
};

export const handleWebhook = async (payload: Buffer, signature: string) => {
  if (!stripe) throw new Error('Stripe not configured');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  return event;
};
