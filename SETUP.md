# ChristCircle Setup Guide

## Prerequisites

1. Node.js (v18 or higher)
2. MongoDB (local or MongoDB Atlas)
3. Stripe account (for payments)
4. Email service (Gmail or other SMTP)

## Step 1: Install MongoDB

### Option A: Local MongoDB
Download and install from https://www.mongodb.com/try/download/community

### Option B: MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string

## Step 2: Configure Environment Variables

Copy the example file and fill in your values:

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:

```env
PORT=3002
CLIENT_URL=http://localhost:5175
MONGODB_URI=mongodb://localhost:27017/christcircle
JWT_SECRET=your-super-secret-jwt-key-change-this

# Email Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Stripe (get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Social Auth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Step 3: Install Dependencies

```bash
npm install
```

This will install dependencies for all workspaces (client, server, shared).

## Step 4: Create Upload Directory

```bash
mkdir uploads
```

## Step 5: Start the Application

```bash
npm run dev
```

This starts both:
- Frontend: http://localhost:5175
- Backend: http://localhost:3002

## Step 6: Test the Application

1. Open http://localhost:5175
2. Register a new account
3. Try the features:
   - Create prayer requests
   - Browse teachings
   - View events
   - Search Bible verses

## Setting Up Email (Gmail)

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and your device
   - Copy the generated password
4. Use this password in SMTP_PASS

## Setting Up Stripe

1. Create account at https://stripe.com
2. Get your API keys from Dashboard > Developers > API keys
3. For webhooks:
   - Install Stripe CLI: https://stripe.com/docs/stripe-cli
   - Run: `stripe listen --forward-to localhost:3002/api/payment/webhook`
   - Copy the webhook signing secret

## Database Seeding (Optional)

Create some test data:

```bash
npm run seed
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running: `mongod`
- Check your connection string in .env

### Port Already in Use
- Change PORT in server/.env
- Update CLIENT_URL accordingly
- Update proxy in client/vite.config.ts

### Email Not Sending
- Check SMTP credentials
- Enable "Less secure app access" for Gmail
- Use App Password instead of regular password

### File Upload Issues
- Make sure uploads/ directory exists
- Check file permissions
- Verify MAX_FILE_SIZE in .env

## Production Deployment

1. Set NODE_ENV=production
2. Use strong JWT_SECRET
3. Use production MongoDB
4. Enable HTTPS
5. Set up proper CORS
6. Use production Stripe keys
7. Set up proper file storage (AWS S3, Cloudinary)

## Next Steps

- Customize the UI/styling
- Add more features
- Set up CI/CD
- Configure domain and SSL
- Set up monitoring and logging
