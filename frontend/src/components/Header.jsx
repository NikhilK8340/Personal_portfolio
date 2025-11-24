import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ isScrolled, data }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-[rgb(15,15,17)]/90 shadow-lg border-b border-[rgb(63,63,63)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center font-bold text-lg">
              NK
            </div>
            <span className="font-bold text-xl hidden sm:block" style={{ color: 'var(--text-primary)' }}>
              Nikhil Kumar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10B981]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200 hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10B981]"
              style={{ color: 'var(--text-muted)' }}
            >
              <Github size={20} />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200 hover:bg-[rgba(6,182,212,0.1)] hover:text-[#06B6D4]"
              style={{ color: 'var(--text-muted)' }}
            >
              <Linkedin size={20} />
            </a>
            <a
              href={data.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button
                className="bg-[#10B981] hover:bg-[#059669] text-[rgb(15,15,17)] font-semibold px-6 py-2 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(16,185,129,0.3)] hover:-translate-y-0.5"
              >
                <FileText size={18} className="mr-2" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[rgba(16,185,129,0.1)] transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[rgb(63,63,63)] bg-[rgb(15,15,17)]">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10B981]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-3 px-4 pt-4">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10B981]"
                style={{ color: 'var(--text-muted)' }}
              >
                <Github size={20} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-200 hover:bg-[rgba(6,182,212,0.1)] hover:text-[#06B6D4]"
                style={{ color: 'var(--text-muted)' }}
              >
                <Linkedin size={20} />
              </a>
              <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-[rgb(15,15,17)] font-semibold rounded-xl">
                  <FileText size={18} className="mr-2" />
                  Resume
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
