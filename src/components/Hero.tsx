import React from 'react';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cattle.jpg';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Agricultural landscape with cattle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
          <Sparkles className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-32 left-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
          <Camera className="h-6 w-6 text-primary-glow" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                <span className="text-accent font-semibold text-sm">AI-Powered Agriculture</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-hero text-lg px-8 py-4 h-auto">
                <Camera className="mr-2 h-5 w-5" />
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button className="btn-outline-hero text-lg px-8 py-4 h-auto">
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-white/70 text-sm">Breed Types</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-white/70 text-sm">Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 text-center">
            <div className="text-2xl font-bold text-white">12+</div>
            <div className="text-white/70 text-sm">Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
};