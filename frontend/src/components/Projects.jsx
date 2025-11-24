import React from 'react';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const Projects = ({ projects }) => {
  const categoryColors = {
    'Machine Learning': '#10B981',
    'Computer Vision': '#06B6D4',
    'Deep Learning': '#F97316'
  };

  return (
    <section id="projects" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Real-world applications of AI/ML solving practical problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl overflow-hidden hover:border-[#10B981] transition-all duration-300 hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide"
                    style={{
                      backgroundColor: `${categoryColors[project.category]}20`,
                      color: categoryColors[project.category]
                    }}
                  >
                    {project.category}
                  </span>
                  {project.metrics && (
                    <div className="flex items-center space-x-1" style={{ color: '#10B981' }}>
                      <TrendingUp size={16} />
                      <span className="text-sm font-semibold">{project.metrics.accuracy || project.metrics.speed}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[rgb(39,39,42)] border border-[rgb(63,63,63)] rounded-lg text-xs font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      className="px-2.5 py-1 bg-[rgb(39,39,42)] border border-[rgb(63,63,63)] rounded-lg text-xs font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-[rgb(63,63,63)] bg-transparent hover:border-[#10B981] hover:bg-[rgba(16,185,129,0.1)] text-[var(--text-primary)] rounded-xl transition-all duration-200"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
