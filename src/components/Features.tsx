import React from 'react';
import { Camera, Database, Globe, Wifi } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import techIcons from '@/assets/tech-icons.jpg';
import farmerTech from '@/assets/farmer-tech.jpg';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Camera,
      title: t('feature.recognition.title'),
      description: t('feature.recognition.desc'),
      color: 'text-primary'
    },
    {
      icon: Database,
      title: t('feature.database.title'),
      description: t('feature.database.desc'),
      color: 'text-accent'
    },
    {
      icon: Globe,
      title: t('feature.multilingual.title'),
      description: t('feature.multilingual.desc'),
      color: 'text-primary-glow'
    },
    {
      icon: Wifi,
      title: t('feature.offline.title'),
      description: t('feature.offline.desc'),
      color: 'text-accent'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-elegant p-6 text-center group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-1 rounded-2xl">
              <img
                src={techIcons}
                alt="Technology Integration"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Advanced AI Technology
            </h3>
            <p className="text-lg text-muted-foreground">
              Our platform leverages cutting-edge machine learning algorithms trained specifically on Indian livestock breeds. With continuous learning and improvement, we ensure the highest accuracy in breed identification.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">99.2%</div>
                <div className="text-sm text-muted-foreground">Recognition Accuracy</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent mb-1">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Processing Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-6 animate-slide-up order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Empowering Rural Communities
            </h3>
            <p className="text-lg text-muted-foreground">
              Designed with rural farmers in mind, our platform works seamlessly even in areas with limited internet connectivity. The intuitive interface and multi-language support ensure accessibility for all users.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Works offline with cached models</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">SMS and voice integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span className="text-muted-foreground">Regional language support</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-1 rounded-2xl">
              <img
                src={farmerTech}
                alt="Farmer using technology"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};