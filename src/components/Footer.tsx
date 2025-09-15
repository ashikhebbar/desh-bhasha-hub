import React from 'react';
import { Camera, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">BreedAI</span>
            </div>
            <p className="text-background/80 text-sm">
              Revolutionizing livestock breed identification with AI technology. Empowering farmers, veterinarians, and researchers across India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-background/60 hover:text-accent transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Breed Identification</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Livestock Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Agricultural Consulting</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Research Collaboration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4 text-accent" />
                <span>support@breedai.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Agricultural Tech Hub, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 BreedAI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};