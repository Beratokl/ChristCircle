# ChristCircle Deployment Guide

## Option 1: Vercel (Frontend) + Render (Backend) - FREE

### Backend Deployment (Render)
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create New Web Service
4. Connect GitHub repo
5. Settings:
   - Root Directory: `server`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. Add Environment Variables:
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_secret_key
   CLIENT_URL=https://your-frontend-url.vercel.app
   ```

### Frontend Deployment (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Settings:
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add Environment Variable:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```

## Option 2: Railway - FREE (Full Stack)

1. Go to [railway.app](https://railway.app)
2. Create New Project
3. Deploy from GitHub
4. Add services:
   - Backend service (server folder)
   - Frontend service (client folder)
5. Add environment variables in each service

## Option 3: Heroku - PAID

### Backend
```bash
cd server
heroku create christcircle-api
heroku config:set MONGODB_URI=your_uri
heroku config:set JWT_SECRET=your_secret
git push heroku main
```

### Frontend
```bash
cd client
heroku create christcircle-app
heroku buildpacks:set heroku/nodejs
git push heroku main
```

## Option 4: AWS (EC2) - PAID

1. Launch EC2 instance (Ubuntu)
2. Install Node.js and PM2
3. Clone repo
4. Setup nginx reverse proxy
5. Configure SSL with Let's Encrypt

## Pre-Deployment Checklist

- [ ] MongoDB Atlas configured
- [ ] Environment variables set
- [ ] Build scripts working locally
- [ ] CORS configured for production URLs
- [ ] JWT secret changed from default
- [ ] Stripe keys (if using payments)
- [ ] Email service configured

## Recommended: Vercel + Render (FREE)
- Frontend: Vercel (fast, free, auto-deploy)
- Backend: Render (free tier, auto-sleep after inactivity)
- Database: MongoDB Atlas (free tier, 512MB)

Total Cost: $0/month
