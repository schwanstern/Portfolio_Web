import React from 'react';
import Section from './Section';

const Contact = ({ profile }) => {
    return (
        <Section title="Communication_Uplink">
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded relative overflow-hidden text-center">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                    Ready to Collaborate?
                </h3>

                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Initiate a transmission for project inquiries, technical consulting, or just to say hello.
                </p>

                <a href={`mailto:${profile.links.email}`}
                    className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold rounded transition-all hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <span className="mr-3">✉️</span>
                    SEND_PACKET( )
                </a>

                <div className="mt-12 pt-8 border-t border-slate-800 flex justify-center gap-8">
                    <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-mono text-sm">
                        [ LINKEDIN ]
                    </a>
                    <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors font-mono text-sm">
                        [ GITHUB ]
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
