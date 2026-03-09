# ChristCircle API Documentation

## Base URL
`http://localhost:3002/api`

## Community Features API

### Bible Studies
- `GET /community/bible-studies` - Get all Bible studies
- `POST /community/bible-studies` - Create new Bible study
- `GET /community/bible-studies/:id` - Get specific study
- `PUT /community/bible-studies/:id` - Update study
- `POST /community/bible-studies/:id/discussion` - Add discussion

### Small Groups
- `GET /community/small-groups` - Get all small groups
- `POST /community/small-groups` - Create new group
- `POST /community/small-groups/:id/join` - Join group

### Mentorship
- `GET /community/mentorships` - Get mentorships
- `POST /community/mentorships` - Request mentorship
- `PUT /community/mentorships/:id/status` - Update status

### Prayer Chains
- `GET /community/prayer-chains` - Get active prayer chains
- `POST /community/prayer-chains` - Create prayer chain
- `POST /community/prayer-chains/:id/pray` - Mark as prayed

### Fasting Groups
- `GET /community/fasting-groups` - Get fasting groups
- `POST /community/fasting-groups` - Create group
- `POST /community/fasting-groups/:id/checkin` - Check-in progress

### Memory Challenges
- `GET /community/memory-challenges` - Get challenges
- `POST /community/memory-challenges` - Create challenge
- `POST /community/memory-challenges/:id/submit` - Submit answer

### Reading Plans
- `GET /community/reading-plans` - Get reading plans
- `POST /community/reading-plans` - Create plan
- `POST /community/reading-plans/:id/progress` - Update progress

### Attendance
- `GET /community/attendance` - Get attendance records
- `POST /community/attendance` - Record attendance

### Volunteers
- `GET /community/volunteers` - Get opportunities
- `POST /community/volunteers` - Create opportunity
- `POST /community/volunteers/:id/signup` - Sign up

### Donations
- `GET /community/donations` - Get donation history
- `POST /community/donations` - Record donation

### Live Streams
- `GET /community/live-streams` - Get streams
- `POST /community/live-streams` - Create stream
- `PUT /community/live-streams/:id/status` - Update status

## Request Examples

### Create Bible Study
```json
POST /community/bible-studies
{
  "title": "Gospel of John Study",
  "description": "Weekly study of John's Gospel",
  "scripture": "John 1-21",
  "leader": "userId",
  "schedule": "Wednesdays 7PM"
}
```

### Join Small Group
```json
POST /community/small-groups/:id/join
{
  "userId": "userId"
}
```

### Create Prayer Chain
```json
POST /community/prayer-chains
{
  "title": "Urgent: Health Crisis",
  "description": "Please pray for...",
  "creator": "userId",
  "isUrgent": true
}
```
