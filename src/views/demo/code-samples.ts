export const garlicCode = `
import React from 'react';
import { User, Mail, MapPin } from 'lucide-react';

export default function UserCard() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm w-full border border-gray-100">
        <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-600 relative">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Garlic" alt="User" />
            </div>
          </div>
        </div>
        <div className="pt-14 pb-8 px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Alex Morgan</h2>
          <p className="text-purple-600 font-medium mb-4">Senior Developer</p>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="flex flex-col items-center">
              <span className="font-bold text-gray-800">1.2k</span>
              <span className="text-xs text-gray-500">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-gray-800">850</span>
              <span className="text-xs text-gray-500">Following</span>
            </div>
          </div>
          <button className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors shadow-lg">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
`;

export const claudeCode = `
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <div className="flex items-center justify-center h-full bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Us</h2>
        {status === 'sent' ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800">Message Sent!</h3>
            <p className="text-slate-500 mt-2">We'll get back to you shortly.</p>
            <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 hover:underline">Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea required rows="3" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help?"></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {status === 'sending' ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
`;

export const geminiCode = `
import React from 'react';

export default function AnalyticsDashboard() {
  const data = [45, 72, 38, 91, 56, 24, 67];
  
  return (
    <div className="flex items-center justify-center h-full bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-bold text-white">Traffic Overview</h2>
            <p className="text-gray-400 text-sm">Last 7 Days</p>
          </div>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">+12.5%</span>
        </div>
        
        <div className="h-48 flex items-end justify-between gap-2">
          {data.map((h, i) => (
            <div key={i} className="w-full relative group">
              <div 
                className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md transition-all duration-500 hover:opacity-80"
                style={{ height: \`\${h}%\` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}k
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-4 text-gray-500 text-xs">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>
    </div>
  );
}
`;

export const minimaxCode = `
import React, { useState } from 'react';

export default function CreativeCard() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center justify-center h-full bg-orange-50 p-4">
      <div 
        className="relative cursor-pointer group"
        onClick={() => setActive(!active)}
      >
        <div className={\`absolute inset-0 bg-orange-400 rounded-2xl transform transition-transform duration-300 \${active ? 'rotate-6 scale-105' : 'rotate-0'}\`}></div>
        <div className={\`absolute inset-0 bg-yellow-400 rounded-2xl transform transition-transform duration-300 delay-75 \${active ? '-rotate-3 scale-105' : 'rotate-0'}\`}></div>
        
        <div className="relative bg-white p-8 rounded-2xl shadow-xl border-2 border-black transform transition-transform duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-black rounded-full mb-6 flex items-center justify-center text-3xl">
            ✨
          </div>
          <h2 className="text-3xl font-black text-black mb-2">Create.</h2>
          <p className="text-gray-600 font-medium mb-6 leading-relaxed">
            Unleash your imagination with our new tools.
          </p>
          <div className="flex items-center gap-2 font-bold text-black group-hover:gap-4 transition-all">
            Explore Now <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
