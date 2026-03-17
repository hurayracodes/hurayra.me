import React, { useRef, useEffect } from 'react';

const GlowCard = ({ card, index, children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="glow-card relative rounded-3xl p-10 mb-8 bg-gradient-to-br from-slate-900/90 via-indigo-900/50 to-slate-900/90 backdrop-blur-xl border border-slate-800/60 shadow-2xl hover:shadow-[0_25px_50px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden group"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      }}
    >
      {/* Dynamic glow overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.3),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none z-0"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl shadow-lg">
              ⭐
            </span>
          ))}
        </div>
        
        {/* Review */}
        {card?.review && (
          <p className="text-gray-100 text-lg mb-6 leading-relaxed drop-shadow-lg">
            {card.review}
          </p>
        )}
        
        {/* Children */}
        {children}
      </div>
    </div>
  );
};

export default GlowCard;

