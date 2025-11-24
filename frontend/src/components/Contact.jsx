import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = ({ personal }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Configuration
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_portfolio';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_portfolio';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personal.name,
          to_email: personal.email
        },
        publicKey
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully! ✅",
          description: "Thank you for reaching out. I'll get back to you soon.",
          duration: 5000
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message ❌",
        description: "Something went wrong. Please try again or email me directly at " + personal.email,
        duration: 7000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Contact Information
              </h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[#10B981] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} style={{ color: '#10B981' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Email</h4>
                  <a href={`mailto:${personal.email}`} className="hover:text-[#10B981] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[#06B6D4] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(6,182,212,0.1)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} style={{ color: '#06B6D4' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Phone</h4>
                  <a href={`tel:${personal.phone}`} className="hover:text-[#06B6D4] transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-4 bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[#F97316] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[rgba(249,115,22,0.1)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} style={{ color: '#F97316' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-[rgb(15,15,17)] border border-[rgb(63,63,63)] rounded-2xl p-8 space-y-6 hover:border-[#10B981] transition-all duration-300">
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgb(24,24,27)] border-2 border-[rgb(63,63,63)] rounded-xl focus:outline-none focus:border-[#10B981] transition-colors text-[var(--text-primary)]"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgb(24,24,27)] border-2 border-[rgb(63,63,63)] rounded-xl focus:outline-none focus:border-[#10B981] transition-colors text-[var(--text-primary)]"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgb(24,24,27)] border-2 border-[rgb(63,63,63)] rounded-xl focus:outline-none focus:border-[#10B981] transition-colors text-[var(--text-primary)]"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[rgb(24,24,27)] border-2 border-[rgb(63,63,63)] rounded-xl focus:outline-none focus:border-[#10B981] transition-colors resize-none text-[var(--text-primary)]"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-[rgb(15,15,17)] font-semibold py-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(16,185,129,0.4)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
