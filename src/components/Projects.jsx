import React from 'react';
import Section from './Section';

const Projects = ({ projects }) => {
    return (
        <Section title="Project_Modules">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded hover:border-emerald-500/50 transition-colors group">
                        <h3 className="text-xl font-bold text-emerald-400 mb-2 font-mono group-hover:text-emerald-300">
                            {project.title}
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a href={project.link} className="inline-flex items-center text-sm font-mono text-emerald-500 hover:text-emerald-400 transition-colors">
                            VIEW_SOURCE <span className="ml-2">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
