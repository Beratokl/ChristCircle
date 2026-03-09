# ChristCircle

A Christian community platform where believers can connect, chat, and grow together.

## Features

- User authentication (JWT)
- Real-time community chat with Socket.io
- Pastor teachings (articles, videos, audio, sermons)
- Books library with reviews and purchases
- Prayer request board & prayer chains
- Bible study groups with discussions
- Small groups/cell groups management
- Mentorship matching system
- Consultation booking with pastors
- Event calendar and RSVP
- Daily devotionals
- Scripture memory challenges
- Reading plans (Bible & books)
- Fasting groups with tracking
- Attendance tracking
- Volunteer scheduling
- Donation tracking
- Live streaming
- User profiles with badges and reading streaks
- Notifications system
- User roles (Members, Pastors, Admins)
- Reactions and engagement features

## Getting Started

1. Install dependencies:
```bash
npm run install:all
```

2. Set up environment variables:
```bash
cp server/.env.example server/.env
# Edit server/.env with your configuration
```

3. Start development servers:
```bash
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:3001

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express + Socket.io
- Database: MongoDB (to be configured)
