import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Testimonials from colleagues, mentors, and collaborators
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[rgb(24,24,27)] border border-[rgb(63,63,63)] rounded-2xl p-8 hover:border-[#10B981] transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={64} style={{ color: '#10B981' }} />
              </div>

              {/* Content */}
              <div className="relative space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={18} fill="#10B981" style={{ color: '#10B981' }} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-[rgb(63,63,63)]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[#10B981]"
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {testimonial.role}
                    </p>
                    <p className="text-xs" style={{ color: '#10B981' }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
