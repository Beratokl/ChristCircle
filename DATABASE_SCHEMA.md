# ChristCircle Database Schema

## Data Types Stored in MongoDB

### 1. User Data
**Collection: users**
```javascript
{
  email: "user@example.com",
  password: "hashed_password",  // Encrypted with bcrypt
  name: "John Doe",
  role: "member" | "pastor" | "admin",
  avatar: "/uploads/avatar.jpg",  // Profile picture URL
  bio: "Follower of Christ...",
  location: "New York, USA",
  churchAffiliation: "Grace Community Church",
  isVerified: true,
  isPastorVerified: false,
  interests: ["prayer", "bible-study", "worship"],
  readingStreak: 15,  // Days in a row
  badges: ["prayer-warrior", "daily-reader"],
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Sensitive Data:**
- Passwords (hashed, never stored in plain text)
- Email addresses
- Personal information (name, location)

---

### 2. Messages (Chat)
**Collection: messages**
```javascript
{
  userId: ObjectId("..."),  // Reference to user
  roomId: "general-chat",
  content: "Praise the Lord!",
  type: "text" | "image" | "file",
  fileUrl: "/uploads/image.jpg",
  reactions: [
    { userId: ObjectId("..."), type: "pray" },
    { userId: ObjectId("..."), type: "amen" }
  ],
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:** Text messages, image URLs, file URLs

---

### 3. Teachings
**Collection: teachings**
```javascript
{
  pastorId: ObjectId("..."),
  title: "The Power of Prayer",
  content: "Full article or sermon text...",
  type: "article" | "video" | "audio" | "sermon" | "course",
  category: "Prayer",
  tags: ["prayer", "faith", "spiritual-growth"],
  mediaUrl: "/uploads/sermon.mp4",  // Video/audio file
  thumbnailUrl: "/uploads/thumb.jpg",
  duration: 3600,  // seconds
  views: 1250,
  likes: [ObjectId("..."), ObjectId("...")],
  bookmarks: [ObjectId("...")],
  comments: [
    {
      userId: ObjectId("..."),
      content: "Great teaching!",
      createdAt: "2024-01-15T10:30:00Z"
    }
  ],
  isLive: false,
  scheduledAt: "2024-01-20T19:00:00Z",
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:** 
- Text content (articles, sermons)
- Video files (uploaded or URLs)
- Audio files (podcasts, sermons)
- Metadata (views, likes, comments)

---

### 4. Books
**Collection: books**
```javascript
{
  pastorId: ObjectId("..."),
  title: "Walking in Faith",
  description: "A guide to developing stronger faith...",
  coverUrl: "/uploads/book-cover.jpg",
  fileUrl: "/uploads/book.pdf",  // PDF file
  price: 9.99,  // USD
  isPaid: true,
  category: "Spiritual Growth",
  tags: ["faith", "devotional"],
  reviews: [
    {
      userId: ObjectId("..."),
      rating: 5,  // 1-5 stars
      comment: "Life-changing book!",
      createdAt: "2024-01-15T10:30:00Z"
    }
  ],
  purchases: [ObjectId("..."), ObjectId("...")],
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:**
- PDF files (books)
- Images (covers)
- Payment information (prices, purchases)

---

### 5. Prayer Requests
**Collection: prayerrequests**
```javascript
{
  userId: ObjectId("..."),
  title: "Healing for my mother",
  content: "Please pray for my mother who is sick...",
  category: "Health",
  isAnonymous: false,
  prayers: [
    {
      userId: ObjectId("..."),
      message: "Praying for your mother",
      createdAt: "2024-01-15T10:30:00Z"
    }
  ],
  status: "active" | "answered" | "closed",
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Sensitive Data:**
- Personal prayer requests (health, family, financial issues)
- Can be anonymous

---

### 6. Consultations
**Collection: consultations**
```javascript
{
  pastorId: ObjectId("..."),
  memberId: ObjectId("..."),
  status: "pending" | "scheduled" | "completed" | "cancelled",
  type: "spiritual" | "counseling" | "prayer" | "general",
  scheduledAt: "2024-01-20T14:00:00Z",
  duration: 30,  // minutes
  notes: "Pastor's notes...",  // Private
  memberNotes: "Member's notes...",  // Private
  isVideoCall: true,
  meetingLink: "https://zoom.us/j/123456789",
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Sensitive Data:**
- Counseling notes
- Personal issues discussed
- Meeting links

---

### 7. Events
**Collection: events**
```javascript
{
  organizerId: ObjectId("..."),
  title: "Sunday Service",
  description: "Join us for worship...",
  type: "service" | "conference" | "bible-study" | "prayer-meeting",
  location: "Main Church Building",
  isOnline: true,
  meetingLink: "https://zoom.us/j/123456789",
  startDate: "2024-01-21T10:00:00Z",
  endDate: "2024-01-21T12:00:00Z",
  imageUrl: "/uploads/event.jpg",
  attendees: [ObjectId("..."), ObjectId("...")],
  maxAttendees: 100,
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:**
- Event information
- Attendee lists
- Meeting links

---

### 8. Devotionals
**Collection: devotionals**
```javascript
{
  title: "Trust in the Lord",
  content: "Today's devotional message...",
  verse: "Trust in the Lord with all your heart...",
  verseReference: "Proverbs 3:5-6",
  date: "2024-01-15",
  authorId: ObjectId("..."),
  reads: [ObjectId("..."), ObjectId("...")],
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:** Daily devotional content, Bible verses

---

### 9. Notifications
**Collection: notifications**
```javascript
{
  userId: ObjectId("..."),
  type: "prayer" | "consultation" | "event" | "message",
  title: "New Prayer Request",
  message: "Someone needs your prayers",
  link: "/prayers/123",
  isRead: false,
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:** User notifications

---

### 10. Testimonies
**Collection: testimonies**
```javascript
{
  userId: ObjectId("..."),
  title: "God Healed My Marriage",
  content: "My testimony of how God restored...",
  category: "Marriage",
  isApproved: true,  // Moderated by admin
  likes: [ObjectId("...")],
  comments: [
    {
      userId: ObjectId("..."),
      content: "Glory to God!",
      createdAt: "2024-01-15T10:30:00Z"
    }
  ],
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:** Personal testimonies, life stories

---

### 11. Forums
**Collection: forums**
```javascript
{
  title: "How to pray effectively?",
  description: "Discussion about prayer...",
  category: "Prayer",
  authorId: ObjectId("..."),
  posts: [
    {
      userId: ObjectId("..."),
      content: "I believe prayer requires...",
      likes: [ObjectId("...")],
      replies: [
        {
          userId: ObjectId("..."),
          content: "Great point!",
          createdAt: "2024-01-15T10:30:00Z"
        }
      ],
      createdAt: "2024-01-15T10:30:00Z"
    }
  ],
  isPinned: false,
  isLocked: false,
  createdAt: "2024-01-15T10:30:00Z"
}
```

**Data Type:** Discussion threads, comments

---

## File Storage

### Uploaded Files (stored in /uploads directory)
- **Images:** Profile pictures, event images, book covers, teaching thumbnails
- **Videos:** Sermon recordings, teaching videos (can be large, 100MB+)
- **Audio:** Podcasts, audio sermons
- **Documents:** PDF books, study materials

### File Types Allowed
- Images: .jpg, .jpeg, .png, .gif
- Videos: .mp4
- Audio: .mp3
- Documents: .pdf, .doc, .docx

---

## Data Size Estimates

### Small Database (100 users)
- Users: ~50 KB
- Messages: ~1 MB
- Teachings: ~5 MB
- Total: ~10-20 MB

### Medium Database (1,000 users)
- Users: ~500 KB
- Messages: ~50 MB
- Teachings: ~100 MB
- Files: ~1-5 GB
- Total: ~1-5 GB

### Large Database (10,000 users)
- Users: ~5 MB
- Messages: ~500 MB
- Teachings: ~1 GB
- Files: ~50-100 GB
- Total: ~50-100 GB

---

## Privacy & Security

### Sensitive Data
1. **Passwords:** Hashed with bcrypt (never plain text)
2. **Prayer Requests:** Can contain personal health/family issues
3. **Consultation Notes:** Private counseling information
4. **Email Addresses:** Personal contact information
5. **Payment Data:** Handled by Stripe (not stored in database)

### Data Protection
- Passwords encrypted
- JWT tokens for authentication
- HTTPS in production
- Role-based access control
- Admin moderation for testimonies

### GDPR Compliance Considerations
- Users can delete their accounts
- Data export capability needed
- Privacy policy required
- Cookie consent needed

---

## Backup Recommendations

### Development
- MongoDB automatic journaling
- Manual backups: `mongodump --db christcircle`

### Production (MongoDB Atlas)
- Automatic daily backups
- Point-in-time recovery
- Backup retention: 7-30 days

---

## Summary

**Main Data Types:**
1. User profiles and authentication
2. Text content (messages, teachings, prayers)
3. Media files (images, videos, audio, PDFs)
4. Relationships (likes, comments, followers)
5. Scheduling data (events, consultations)
6. Payment records (book purchases, donations)

**Storage Needs:**
- MongoDB: Text data, metadata, relationships
- File System: Uploaded media files
- Stripe: Payment processing (external)
