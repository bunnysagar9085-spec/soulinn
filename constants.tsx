
import React from 'react';
import { Category, Service, Worker } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Home Cleaning', icon: '✨', description: 'Deep & basic cleaning for every corner.' },
  { id: '2', name: 'Plumbing', icon: '🚰', description: 'Expert solutions for all leaks and fittings.' },
  { id: '3', name: 'Electrical', icon: '⚡', description: 'Safe and certified electrical work.' },
  { id: '4', name: 'Appliance Repair', icon: '🛠️', description: 'AC, Fridge, and Washing Machine repair.' },
  { id: '5', name: 'Salon & Spa', icon: '💆‍♀️', description: 'Premium grooming at the comfort of your home.' },
  { id: '6', name: 'Fitness & Yoga', icon: '🧘', description: 'Personal trainers and skill tutors.' },
  { id: '7', name: 'Interior & Painting', icon: '🎨', description: 'Revamp your space with elite finishes.' },
  { id: '8', name: 'Packers & Movers', icon: '🚚', description: 'Hassle-free relocation services.' }
];

export const TOP_WORKERS: Worker[] = [
  {
    id: 'w1',
    name: 'Suresh Kumar',
    rating: 4.9,
    completedJobs: 1240,
    skills: ['Plumbing', 'Electrical'],
    imageUrl: 'https://picsum.photos/200?random=1',
    verified: true,
    basePrice: 499
  },
  {
    id: 'w2',
    name: 'Priya Reddy',
    rating: 4.8,
    completedJobs: 850,
    skills: ['Salon', 'Grooming'],
    imageUrl: 'https://picsum.photos/200?random=2',
    verified: true,
    basePrice: 999
  },
  {
    id: 'w3',
    name: 'Vikram Singh',
    rating: 5.0,
    completedJobs: 420,
    skills: ['Deep Cleaning'],
    imageUrl: 'https://picsum.photos/200?random=3',
    verified: true,
    basePrice: 1499
  }
];

export const MOCK_SERVICES: Service[] = [
  { id: 's1', name: 'Full Home Deep Cleaning', category: '1', price: 2999, description: 'Complete chemical cleaning of 3BHK', icon: '🧼' },
  { id: 's2', name: 'Bathroom Deep Cleaning', category: '1', price: 699, description: 'Scrubbing and disinfection', icon: '🚿' },
  { id: 's3', name: 'AC Servicing', category: '4', price: 599, description: 'Filter cleaning and gas check', icon: '❄️' },
  { id: 's4', name: 'Men\'s Haircut & Facial', category: '5', price: 899, description: 'Luxury grooming package', icon: '✂️' }
];
