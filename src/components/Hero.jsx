import React, { useState, useEffect } from 'react';

const Hero = ({ profile }) => {
    const [text, setText] = useState('');
    const fullText = `Initializing system...\nLoading user profile: ${profile.name}\nStatus: ONLINE`;

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, [fullText]);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="max-w-7xl w-full px-6 relative z-10">
                <div className="font-mono text-emerald-400 mb-6 h-24 whitespace-pre-line">
                    {text}
                    <span className="animate-pulse">_</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold text-slate-100 mb-4 tracking-tight">
                    {profile.name}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 mb-8 font-mono">
                    {profile.title}
                </p>
                <p className="text-slate-500 max-w-2xl mb-12 text-lg">
          // {profile.tagline}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 transition-all font-mono rounded">
                        LINKEDIN_CONNECT()
                    </a>
                    <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white transition-all font-mono rounded">
                        GIT_PUSH_ORIGIN
                    </a>
                    <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" download
                        className="px-6 py-3 bg-emerald-600/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-600/40 transition-all font-mono rounded flex items-center">
                        <span className="mr-2">⬇</span> DOWNLOAD_CV.pdf
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
