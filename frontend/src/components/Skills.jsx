import React from 'react';
import { Brain, Code, Layers, Wrench } from 'lucide-react';

const Skills = ({ skills }) => {
  const categoryIcons = {
    'AI/ML & Data Science': { icon: Brain, color: '#10B981' },
    'Programming Languages': { icon: Code, color: '#06B6D4' },
    'Frameworks & Libraries': { icon: Layers, color: '#F97316' },
    'Tools & Technologies': { icon: Wrench, color: '#10B981' }
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            A comprehensive toolkit for building intelligent solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const { icon: Icon, color } = categoryIcons[category] || { icon: Code, color: '#10B981' };
            
            return (
              <div
                key={category}
                className="bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-8 hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 group animate-fadeInUp"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}20`, color: color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold" style={{ color: color }}>
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 bg-[rgb(39,39,42)] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${color}, ${color}cc)`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
