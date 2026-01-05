import React, { useState, useEffect } from 'react';

const EasterEgg = () => {
    const [keys, setKeys] = useState('');
    const [triggered, setTriggered] = useState(false);
    const secretCode = 'viti';

    useEffect(() => {
        const handleKeyDown = (e) => {
            setKeys((prev) => {
                const newKeys = (prev + e.key).slice(-secretCode.length);
                if (newKeys === secretCode) {
                    setTriggered(true);
                    setTimeout(() => setTriggered(false), 8000); // Reset after animation
                }
                return newKeys;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!triggered) return null;

    return (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-end justify-start pb-12 overflow-hidden bg-emerald-500/10 backdrop-blur-[1px]">
            <div className="absolute top-10 left-10 font-mono text-emerald-400 text-xl md:text-2xl animate-pulse bg-slate-950 p-4 border border-emerald-500 rounded">
                {'>'} DETECTING VINEYARD ENVIRONMENT...<br />
                {'>'} TRAXX_AUTONOMOUS_SYSTEM: ENGAGED
            </div>

            {/* ASCII Tractor Animation */}
            <div className="animate-tractor font-mono text-emerald-300 text-xs md:text-sm whitespace-pre leading-none">
                {`
    __!__
  _/  |  \\_
 |  VITI   |
 |_________|
   O     O
`}
            </div>

            <style>{`
        @keyframes tractorMove {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }
        .animate-tractor {
          position: absolute;
          bottom: 20px;
          animation: tractorMove 8s linear forwards;
        }
      `}</style>
        </div>
    );
};

export default EasterEgg;
