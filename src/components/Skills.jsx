import React from 'react';
import Section from './Section';

const Skills = ({ skills }) => {
    return (
        <Section title="System_Capabilities">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((category, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-6 border border-slate-800 rounded relative group hover:border-emerald-500/30 transition-colors">
                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-2 h-2 bg-slate-800 group-hover:bg-emerald-500/50 transition-colors"></div>

                        <h3 className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-widest border-b border-slate-800 pb-2">
                            {category.category}
                        </h3>
                        <ul className="space-y-2">
                            {category.items.map((item, i) => (
                                <li key={i} className="text-slate-300 font-mono text-sm flex items-center">
                                    <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
