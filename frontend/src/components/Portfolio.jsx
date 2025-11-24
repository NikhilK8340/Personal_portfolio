import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import TechStack from './TechStack';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import { Toaster } from './Toaster';
import { portfolioData } from '../mock';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio" style={{ background: 'var(--bg-primary)' }}>
      <Header isScrolled={isScrolled} data={portfolioData.personal} />
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.about} personal={portfolioData.personal} />
        <Experience 
          experience={portfolioData.experience} 
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />
        <TechStack />
        <Projects projects={portfolioData.projects} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact personal={portfolioData.personal} />
      </main>
      <Footer data={portfolioData.personal} />
      <Toaster />
    </div>
  );
};

export default Portfolio;
