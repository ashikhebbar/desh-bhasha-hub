import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@breedai.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Agricultural Tech Hub, India',
      color: 'text-primary-glow'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">Contact</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.desc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're a farmer looking to identify your livestock breeds, a researcher interested in our data, or a partner wanting to collaborate, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elegant p-4 flex items-center gap-4 hover:scale-105 transition-all duration-300">
                  <div className={`p-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10`}>
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Quick Support</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Need immediate assistance? Our support team is available 24/7 to help with any technical issues or questions about breed identification.
              </p>
              <Button className="btn-hero w-full">
                <Phone className="h-4 w-4 mr-2" />
                Get Instant Support
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-elegant p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+91 98765 43210" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input placeholder="How can we help you?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5}
                />
              </div>

              <Button className="btn-hero w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};