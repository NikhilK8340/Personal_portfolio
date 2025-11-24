import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ data }) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10B981] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06B6D4] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <p className="text-lg font-medium" style={{ color: 'var(--accent-emerald)' }}>
                Hi there, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span style={{ color: 'var(--text-primary)' }}>{data.name.split(' ')[0]}</span>
                <br />
                <span className="gradient-text">{data.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--text-secondary)' }}>
                {data.title}
              </h2>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
                {data.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-[#10B981] hover:bg-[#059669] text-[rgb(15,15,17)] font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(16,185,129,0.4)] hover:-translate-y-1"
              >
                Get In Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-2 border-[rgb(63,63,63)] bg-transparent hover:border-[#10B981] hover:bg-[rgba(16,185,129,0.1)] text-[var(--text-primary)] font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-200 hover:-translate-y-1"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] flex items-center justify-center transition-all duration-200 hover:border-[#10B981] hover:bg-[rgba(16,185,129,0.1)] hover:-translate-y-1"
                style={{ color: 'var(--text-muted)' }}
              >
                <Github size={22} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] flex items-center justify-center transition-all duration-200 hover:border-[#06B6D4] hover:bg-[rgba(6,182,212,0.1)] hover:-translate-y-1"
                style={{ color: 'var(--text-muted)' }}
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="w-12 h-12 rounded-xl bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] flex items-center justify-center transition-all duration-200 hover:border-[#F97316] hover:bg-[rgba(249,115,22,0.1)] hover:-translate-y-1"
                style={{ color: 'var(--text-muted)' }}
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-3xl blur-2xl opacity-20"></div>
              <img
                src={data.photo}
                alt={data.name}
                className="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-3xl border-2 border-[rgb(63,63,63)] shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl px-6 py-3 flex items-center space-x-2 shadow-xl">
                <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Available from {data.availableFrom}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
