import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Experience = ({ experience, education, certifications }) => {
  return (
    <section id="experience" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Experience, Education, and Achievements
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-[rgb(39,39,42)] border border-[rgb(63,63,63)] p-1 rounded-2xl">
            <TabsTrigger 
              value="experience" 
              className="rounded-xl data-[state=active]:bg-[#10B981] data-[state=active]:text-[rgb(15,15,17)] font-semibold transition-all duration-200"
            >
              <Briefcase size={18} className="mr-2" />
              Experience
            </TabsTrigger>
            <TabsTrigger 
              value="education"
              className="rounded-xl data-[state=active]:bg-[#10B981] data-[state=active]:text-[rgb(15,15,17)] font-semibold transition-all duration-200"
            >
              <GraduationCap size={18} className="mr-2" />
              Education
            </TabsTrigger>
            <TabsTrigger 
              value="certifications"
              className="rounded-xl data-[state=active]:bg-[#10B981] data-[state=active]:text-[rgb(15,15,17)] font-semibold transition-all duration-200"
            >
              <Award size={18} className="mr-2" />
              Certifications
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6 animate-fadeInUp">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl p-8 hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="text-lg font-semibold" style={{ color: '#10B981' }}>
                        {exp.company}
                      </span>
                      <div className="flex items-center space-x-2" style={{ color: 'var(--text-muted)' }}>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[rgba(16,185,129,0.1)] border border-[#10B981] rounded-lg">
                    <Calendar size={16} style={{ color: '#10B981' }} />
                    <span className="font-medium" style={{ color: '#10B981' }}>{exp.period}</span>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0"></div>
                        <span style={{ color: 'var(--text-secondary)' }}>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[rgb(39,39,42)] border border-[rgb(63,63,63)] rounded-lg text-sm font-medium hover:border-[#06B6D4] transition-colors duration-200"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6 animate-fadeInUp">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl p-8 hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="text-lg font-semibold" style={{ color: '#10B981' }}>
                        {edu.institution}
                      </span>
                      <div className="flex items-center space-x-2" style={{ color: 'var(--text-muted)' }}>
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[rgba(16,185,129,0.1)] border border-[#10B981] rounded-lg">
                    <Calendar size={16} style={{ color: '#10B981' }} />
                    <span className="font-medium" style={{ color: '#10B981' }}>{edu.period}</span>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[rgb(39,39,42)] border border-[rgb(63,63,63)] rounded-lg text-sm font-medium hover:border-[#06B6D4] transition-colors duration-200"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="grid md:grid-cols-2 gap-6 animate-fadeInUp">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl p-6 hover:border-[#10B981] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                    <Award size={24} style={{ color: 'rgb(15,15,17)' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {cert.title}
                    </h3>
                    <p className="font-medium mb-2" style={{ color: '#10B981' }}>
                      {cert.issuer}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      Issued: {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
