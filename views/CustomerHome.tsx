
import React, { useState } from 'react';
import { CATEGORIES, TOP_WORKERS, MOCK_SERVICES } from '../constants';
import { getSmartServiceRecommendation, generateReferralMessage } from '../services/geminiService';

const CustomerHome: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiRecommendation, setAiRecommendation] = useState<{ categoryName: string, reasoning: string } | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isGeneratingMessage, setIsGeneratingMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mock Referral Data
  const referralData = {
    code: 'ELITE-HYD-6421',
    totalReferrals: 12,
    successfulReferrals: 4,
    creditsEarned: 2000,
    pendingCredits: 500
  };

  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    setIsSearching(true);
    const rec = await getSmartServiceRecommendation(searchQuery);
    setAiRecommendation(rec);
    setIsSearching(false);
  };

  const handleShare = async () => {
    setIsGeneratingMessage(true);
    const message = await generateReferralMessage('Ananya', referralData.code);
    setIsGeneratingMessage(false);
    
    if (navigator.share) {
      navigator.share({
        title: 'EliteFix Referral',
        text: message,
        url: 'https://elitefix.in/join'
      }).catch(console.error);
    } else {
      alert("AI Generated Message:\n\n" + message);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(referralData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
          Elite Services for <br />
          <span className="gold-text">Modern Living</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Hyderabad's most trusted premium service platform. Same-worker re-booking and verified professionals.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleAiSearch} className="mt-8 relative max-w-2xl mx-auto">
          <input 
            type="text" 
            placeholder="What do you need help with today?"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#D4AF37] transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute right-2 top-2 gold-gradient text-black font-bold px-6 py-2 rounded-xl hover:opacity-90 transition-all"
          >
            {isSearching ? 'Thinking...' : 'Find Service'}
          </button>
        </form>

        {aiRecommendation && (
          <div className="mt-4 glass-card p-4 rounded-xl max-w-2xl mx-auto border border-[#D4AF37]/30 text-left animate-in slide-in-from-top-4 duration-300">
            <h4 className="gold-text font-bold mb-1">Elite Assistant Suggestion:</h4>
            <p className="text-sm text-gray-300">
              Based on your request, you should check <strong>{aiRecommendation.categoryName}</strong>. {aiRecommendation.reasoning}
            </p>
          </div>
        )}
      </section>

      {/* Refer & Earn Hub */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-5 rounded-3xl" />
        <div className="relative glass-card p-6 md:p-8 rounded-3xl border border-[#D4AF37]/40 flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              Limited Offer
            </div>
            <h3 className="text-3xl font-serif leading-tight">Share the Luxury, <br />Get <span className="gold-text">₹500 Credit</span></h3>
            <p className="text-gray-400 text-sm max-w-md">
              Invite your inner circle to experience EliteFix. Both of you receive ₹500 in your Elite Wallet when they complete their first service.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1 pl-4">
                <span className="font-mono text-[#D4AF37] font-bold tracking-wider">{referralData.code}</span>
                <button 
                  onClick={copyCode}
                  className="ml-4 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs transition-all"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <button 
                onClick={handleShare}
                disabled={isGeneratingMessage}
                className="gold-gradient text-black font-bold px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                {isGeneratingMessage ? 'Crafting Message...' : '✨ Invite Friends'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-72">
            <div className="bg-black/30 border border-white/5 p-4 rounded-2xl text-center">
              <span className="text-gray-500 text-[10px] uppercase block mb-1">Earnings</span>
              <span className="text-xl font-bold gold-text">₹{referralData.creditsEarned}</span>
            </div>
            <div className="bg-black/30 border border-white/5 p-4 rounded-2xl text-center">
              <span className="text-gray-500 text-[10px] uppercase block mb-1">Pending</span>
              <span className="text-xl font-bold text-gray-400">₹{referralData.pendingCredits}</span>
            </div>
            <div className="col-span-2 bg-black/30 border border-white/5 p-4 rounded-2xl">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-xs text-gray-400">Referral Success</span>
                 <span className="text-xs text-[#D4AF37] font-bold">{referralData.successfulReferrals}/{referralData.totalReferrals}</span>
               </div>
               <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                 <div 
                   className="h-full gold-gradient transition-all duration-1000" 
                   style={{ width: `${(referralData.successfulReferrals / referralData.totalReferrals) * 100}%` }} 
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl font-serif">Service Categories</h3>
          <button className="text-[#D4AF37] text-sm hover:underline">View All 100+</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="glass-card p-6 rounded-2xl group cursor-pointer hover:border-[#D4AF37]/50 transition-all">
              <span className="text-4xl block mb-4 transform group-hover:scale-110 transition-transform">{cat.icon}</span>
              <h4 className="font-bold mb-1 group-hover:gold-text">{cat.name}</h4>
              <p className="text-xs text-gray-500">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Professionals */}
      <section>
        <h3 className="text-2xl font-serif mb-6">Top-Rated Professionals</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {TOP_WORKERS.map(worker => (
            <div key={worker.id} className="min-w-[280px] glass-card rounded-2xl p-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img src={worker.imageUrl} alt={worker.name} className="w-20 h-20 rounded-full border-2 border-[#D4AF37]" />
                {worker.verified && (
                  <span className="absolute bottom-0 right-0 bg-blue-500 text-[10px] px-1 rounded-full border border-black">✓</span>
                )}
              </div>
              <h4 className="font-bold">{worker.name}</h4>
              <div className="flex items-center gap-1 text-xs text-yellow-400 mb-2">
                <span>★</span> <span>{worker.rating}</span>
                <span className="text-gray-500">• {worker.completedJobs} jobs</span>
              </div>
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {worker.skills.map(s => <span key={s} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-400">{s}</span>)}
              </div>
              <button className="w-full py-2 bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-all rounded-lg font-medium">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      <div className="h-20" /> {/* Spacer */}
    </div>
  );
};

export default CustomerHome;
