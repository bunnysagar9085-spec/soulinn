
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Cleaning', rev: 4000, workers: 24 },
  { name: 'Plumbing', rev: 3000, workers: 18 },
  { name: 'Electrical', rev: 2000, workers: 15 },
  { name: 'Salon', rev: 6000, workers: 32 },
  { name: 'Fitness', rev: 1800, workers: 12 },
  { name: 'Painting', rev: 5500, workers: 8 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-serif">System Administrator</h2>
          <p className="text-gray-400">EliteFix Operations Hub - Hyderabad</p>
        </div>
        <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm flex items-center gap-2">
          <span>📅</span> Oct 2023 - Nov 2023
        </button>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">💰</div>
          <span className="text-gray-400 text-sm uppercase font-bold">Total Platform GMV</span>
          <div className="text-4xl font-serif mt-2">₹12,45,000</div>
          <p className="text-green-400 text-xs mt-2">↑ 14% from last month</p>
        </div>
        <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🤝</div>
          <span className="text-gray-400 text-sm uppercase font-bold">Net Commission (20%)</span>
          <div className="text-4xl font-serif mt-2 gold-text">₹2,49,000</div>
          <p className="text-gray-400 text-xs mt-2">Operational Profitability: High</p>
        </div>
        <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">👤</div>
          <span className="text-gray-400 text-sm uppercase font-bold">Active Professionals</span>
          <div className="text-4xl font-serif mt-2">1,248</div>
          <p className="text-yellow-400 text-xs mt-2">12 Pending Verifications</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="glass-card p-6 rounded-2xl h-96">
          <h3 className="font-bold mb-6">Revenue & Worker Capacity by Category</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #D4AF37' }}
              />
              <Legend />
              <Bar dataKey="rev" name="Revenue (₹)" fill="#D4AF37" radius={[4, 4, 0, 0]} />
              <Bar dataKey="workers" name="Active Workers" fill="#ffffff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pending Approvals */}
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="font-bold mb-4">Pending Professional Verifications</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-all border border-white/5">
                <div className="flex gap-3 items-center">
                  <img src={`https://picsum.photos/100?random=${i+10}`} className="w-10 h-10 rounded-full" alt="profile" />
                  <div>
                    <h4 className="text-sm font-bold">Rajesh Varma</h4>
                    <p className="text-xs text-gray-500">Category: AC Repair | Pan Card Uploaded</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg">✕</button>
                  <button className="p-2 text-green-400 hover:bg-green-400/10 rounded-lg">✓</button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border border-[#D4AF37]/50 rounded-xl text-xs hover:bg-[#D4AF37]/10 transition-all">Review All 12 Pending</button>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default AdminDashboard;
