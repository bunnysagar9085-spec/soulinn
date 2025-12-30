
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  WORKER = 'WORKER',
  ADMIN = 'ADMIN'
}

export interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  icon: string;
}

export interface Worker {
  id: string;
  name: string;
  rating: number;
  completedJobs: number;
  skills: string[];
  imageUrl: string;
  verified: boolean;
  basePrice: number;
}

export interface Booking {
  id: string;
  serviceId: string;
  workerId: string;
  customerId: string;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  scheduledTime: Date;
  address: string;
  totalPrice: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ReferralStat {
  code: string;
  totalReferrals: number;
  successfulReferrals: number;
  creditsEarned: number;
  pendingCredits: number;
}
