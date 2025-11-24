import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'Python', color: 'emerald' },
    { name: 'JavaScript', color: 'emerald' },
    { name: 'React', color: 'orange' },
    { name: 'C++', color: 'emerald' },
    { name: 'HTML5', color: 'emerald' },
    { name: 'CSS3', color: 'orange' },
    { name: 'SQL', color: 'emerald' },
    { name: 'MongoDB', color: 'emerald' },
    { name: 'REST API', color: 'orange' },
    { name: 'Git', color: 'emerald' },
    { name: 'GitHub', color: 'emerald' },
    { name: 'DSA', color: 'orange' },
    { name: 'OOP', color: 'emerald' },
    { name: 'MySQL', color: 'emerald' },
    { name: 'GUI Dev', color: 'orange' },
    { name: 'Django', color: 'emerald' },
    { name: 'FastAPI', color: 'orange' },
    { name: 'Pandas', color: 'emerald' },
    { name: 'NumPy', color: 'orange' },
    { name: 'Scikit-learn', color: 'emerald' },
    { name: 'Power BI', color: 'emerald' },
    { name: 'Bootstrap', color: 'orange' },
    { name: 'Tkinter', color: 'emerald' },
    { name: 'Qt', color: 'orange' },
    { name: 'Azure', color: 'emerald' }
  ];

  const getColorClass = (color) => {
    if (color === 'emerald') {
      return { dot: '#10B981', border: 'hover:border-[#10B981]' };
    } else {
      return { dot: '#F97316', border: 'hover:border-[#F97316]' };
    }
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">Technology</span> Stack
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Tools and technologies I work with to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {technologies.map((tech, index) => {
            const colors = getColorClass(tech.color);
            return (
              <div
                key={index}
                className={`bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:-translate-y-2 group animate-fadeInUp ${colors.border}`}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                  style={{ backgroundColor: colors.dot }}
                ></div>
                <span
                  className="font-semibold text-base text-center transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Constantly learning and exploring new technologies to stay ahead in the ever-evolving tech landscape
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
