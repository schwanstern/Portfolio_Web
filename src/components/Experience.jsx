import React from 'react';
import Section from './Section';

const Experience = ({ experience }) => {
    return (
        <Section title="Execution_Log">
            <div className="space-y-12">
                {experience.map((job, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-0">
                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:left-1/3 md:ml-[-1px]"></div>

                        <div className="md:flex items-start justify-between group">
                            {/* Date & Company (Left Side on Desktop) */}
                            <div className="md:w-1/3 md:pr-12 mb-4 md:mb-0 relative">
                                <div className="absolute left-[-37px] md:-right-1.5 md:left-auto top-1.5 w-3 h-3 bg-slate-950 border border-emerald-500 rounded-full z-10 group-hover:bg-emerald-500 transition-colors"></div>
                                <h4 className="font-mono text-emerald-400 text-lg">{job.company}</h4>
                                <p className="text-slate-500 font-mono text-sm mt-1">{job.date}</p>
                            </div>

                            {/* Role & Description (Right Side on Desktop) */}
                            <div className="md:w-2/3 md:pl-12">
                                <h3 className="text-xl font-bold text-slate-100 mb-3">{job.role}</h3>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
