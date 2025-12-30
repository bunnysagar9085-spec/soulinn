
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', earnings: 1200 },
  { name: 'Tue', earnings: 1900 },
  { name: 'Wed', earnings: 1500 },
  { name: 'Thu', earnings: 2400 },
  { name: 'Fri', earnings: 3200 },
  { name: 'Sat', earnings: 4500 },
  { name: 'Sun', earnings: 3800 },
];

const WorkerDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Info */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-serif">Worker Dashboard</h2>
          <p className="text-gray-400">Welcome back, Suresh. Ready for today's jobs?</p>
        </div>
        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-xl">
          <span className="text-xs uppercase text-[#D4AF37] font-bold block">Elite Pro Status</span>
          <span className="font-bold">Active Badge</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-2xl">
          <span className="text-gray-500 text-xs uppercase block mb-1">Daily Earnings</span>
          <span className="text-2xl font-bold gold-text">₹2,450</span>
        </div>
        <div className="glass-card p-4 rounded-2xl">
          <span className="text-gray-500 text-xs uppercase block mb-1">Jobs Completed</span>
          <span className="text-2xl font-bold">12</span>
        </div>
        <div className="glass-card p-4 rounded-2xl">
          <span className="text-gray-500 text-xs uppercase block mb-1">Avg Rating</span>
          <span className="text-2xl font-bold">4.92 ★</span>
        </div>
        <div className="glass-card p-4 rounded-2xl">
          <span className="text-gray-500 text-xs uppercase block mb-1">Commissions (20%)</span>
          <span className="text-2xl font-bold text-red-400">₹490</span>
        </div>
      </div>

      {/* Chart */}
      <div className="glass-card p-6 rounded-2xl h-80">
        <h3 className="font-bold mb-4">Weekly Earnings Analysis</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEarn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #D4AF37', color: '#fff' }}
              itemStyle={{ color: '#D4AF37' }}
            />
            <Area type="monotone" dataKey="earnings" stroke="#D4AF37" fillOpacity={1} fill="url(#colorEarn)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Active Jobs */}
      <section>
        <h3 className="text-xl font-bold mb-4">Upcoming Jobs (3)</h3>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="glass-card p-5 rounded-2xl flex flex-col md:flex-row justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center text-2xl">📍</div>
                <div>
                  <h4 className="font-bold">Deep Cleaning Service - Banjara Hills</h4>
                  <p className="text-sm text-gray-400">Customer: Ananya R. | Scheduled for 2:00 PM</p>
                  <p className="text-xs text-[#D4AF37] mt-1">Approx Earnings: ₹1,200 (After Commission)</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 md:flex-none px-6 py-2 border border-[#D4AF37]/50 rounded-xl hover:bg-[#D4AF37]/10 transition-all text-sm">View Details</button>
                <button className="flex-1 md:flex-none px-6 py-2 gold-gradient text-black font-bold rounded-xl text-sm">Accept Job</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
};

export default WorkerDashboard;
