import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative" style={{ background: 'var(--bg-primary)', borderTop: '1px solid rgb(63,63,63)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center font-bold text-lg">
                NK
              </div>
              <span className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                Nikhil Kumar
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              AI/ML Engineer passionate about building intelligent solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-[#10B981] transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Connect</h3>
            <div className="flex space-x-3">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] flex items-center justify-center hover:border-[#10B981] hover:bg-[rgba(16,185,129,0.1)] transition-all duration-200"
                style={{ color: 'var(--text-muted)' }}
              >
                <Github size={20} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] flex items-center justify-center hover:border-[#06B6D4] hover:bg-[rgba(6,182,212,0.1)] transition-all duration-200"
                style={{ color: 'var(--text-muted)' }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="w-10 h-10 rounded-lg bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] flex items-center justify-center hover:border-[#F97316] hover:bg-[rgba(249,115,22,0.1)] transition-all duration-200"
                style={{ color: 'var(--text-muted)' }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgb(63,63,63)] flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-center" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} Nikhil Kumar Pandey. Made with <Heart size={14} className="inline text-[#F97316]" fill="#F97316" /> using React & FastAPI
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] flex items-center justify-center hover:border-[#10B981] hover:bg-[rgba(16,185,129,0.1)] transition-all duration-200 hover:-translate-y-1"
            style={{ color: 'var(--text-muted)' }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
