export enum UserRole {
  MEMBER = 'member',
  PASTOR = 'pastor',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  location?: string;
  churchAffiliation?: string;
  isVerified: boolean;
  isPastorVerified: boolean;
  interests: string[];
  readingStreak: number;
  badges: string[];
  createdAt: Date;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  content: string;
  roomId: string;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
  reactions: { userId: string; type: string }[];
  createdAt: Date;
}

export interface Teaching {
  id: string;
  pastorId: string;
  pastorName: string;
  title: string;
  content: string;
  type: 'article' | 'video' | 'audio' | 'sermon' | 'course';
  category: string;
  tags: string[];
  mediaUrl?: string;
  thumbnailUrl?: string;
  duration?: number;
  views: number;
  likes: string[];
  bookmarks: string[];
  isLive: boolean;
  scheduledAt?: Date;
  createdAt: Date;
}

export interface Book {
  id: string;
  pastorId: string;
  title: string;
  description: string;
  coverUrl?: string;
  fileUrl?: string;
  price: number;
  isPaid: boolean;
  category: string;
  tags: string[];
  reviews: {
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
  }[];
  purchases: string[];
  createdAt: Date;
}

export interface Consultation {
  id: string;
  pastorId: string;
  memberId: string;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  type: 'spiritual' | 'counseling' | 'prayer' | 'general';
  scheduledAt?: Date;
  duration: number;
  notes?: string;
  memberNotes?: string;
  isVideoCall: boolean;
  meetingLink?: string;
  createdAt: Date;
}

export interface PrayerRequest {
  id: string;
  userId: string;
  title: string;
  content: string;
  category: string;
  isAnonymous: boolean;
  prayers: {
    userId: string;
    message?: string;
    createdAt: Date;
  }[];
  status: 'active' | 'answered' | 'closed';
  createdAt: Date;
}

export interface Event {
  id: string;
  organizerId: string;
  title: string;
  description: string;
  type: 'service' | 'conference' | 'bible-study' | 'prayer-meeting' | 'other';
  location: string;
  isOnline: boolean;
  meetingLink?: string;
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
  attendees: string[];
  maxAttendees?: number;
  createdAt: Date;
}

export interface Devotional {
  id: string;
  title: string;
  content: string;
  verse: string;
  verseReference: string;
  date: Date;
  authorId: string;
  reads: string[];
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  link?: string;
  isRead: boolean;
  createdAt: Date;
}
