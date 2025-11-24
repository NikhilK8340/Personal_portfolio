import React from 'react';
import { Sparkles, Target, Users, Zap } from 'lucide-react';

const About = ({ data, personal }) => {
  const highlights = [
    { icon: Zap, text: data.highlights[0], color: '#10B981' },
    { icon: Target, text: data.highlights[1], color: '#06B6D4' },
    { icon: Users, text: data.highlights[2], color: '#F97316' },
    { icon: Sparkles, text: data.highlights[3], color: '#10B981' }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Passionate about creating intelligent solutions that make a difference
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-8 space-y-4 hover:border-[#10B981] transition-all duration-300">
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {data.summary}
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-[rgba(16,185,129,0.1)] border border-[#10B981] rounded-lg">
                    <span className="text-sm font-medium" style={{ color: '#10B981' }}>AI/ML Specialist</span>
                  </div>
                  <div className="px-4 py-2 bg-[rgba(6,182,212,0.1)] border border-[#06B6D4] rounded-lg">
                    <span className="text-sm font-medium" style={{ color: '#06B6D4' }}>Full Stack Developer</span>
                  </div>
                  <div className="px-4 py-2 bg-[rgba(249,115,22,0.1)] border border-[#F97316] rounded-lg">
                    <span className="text-sm font-medium" style={{ color: '#F97316' }}>Problem Solver</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-6 text-center hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Projects</div>
                </div>
                <div className="bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-6 text-center hover:border-[#06B6D4] transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold gradient-text">4+</div>
                  <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Certifications</div>
                </div>
                <div className="bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-6 text-center hover:border-[#F97316] transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold gradient-text">1+</div>
                  <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Internship</div>
                </div>
              </div>
            </div>

            {/* Right - Highlights */}
            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-6 flex items-start space-x-4 hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${highlight.color}20`, color: highlight.color }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                        {highlight.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
