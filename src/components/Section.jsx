import React from 'react';

const Section = ({ title, children, className = '' }) => {
    return (
        <section className={`py-12 relative ${className}`}>
            {/* Schematic Borders */}
            <div className="absolute inset-0 border-l border-r border-slate-800 pointer-events-none mx-4 md:mx-12 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex items-center mb-8">
                    <span className="text-emerald-500 font-mono text-xl mr-4">{'>'}</span>
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-slate-100 uppercase tracking-wider">
                        {title}
                    </h2>
                    <div className="flex-grow h-px bg-slate-800 ml-6"></div>
                </div>

                {children}
            </div>
        </section>
    );
};

export default Section;
