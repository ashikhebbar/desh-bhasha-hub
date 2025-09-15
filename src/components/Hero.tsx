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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="animate-fade-in">
            <div className="flex justify-center lg:justify-start items-center gap-2 mb-4 sm:mb-6">
              <div className="bg-accent/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30">
                <span className="text-accent font-semibold text-xs sm:text-sm">AI-Powered Agriculture</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up justify-center lg:justify-start" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-hero text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto" onClick={() => window.location.href = '/upload'}>
                <Camera className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
              
              <Button className="btn-outline-hero text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto">
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20 text-center">
            <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
            <div className="text-white/70 text-xs sm:text-sm">Breed Types</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20 text-center">
            <div className="text-xl sm:text-2xl font-bold text-white">95%</div>
            <div className="text-white/70 text-xs sm:text-sm">Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20 text-center">
            <div className="text-xl sm:text-2xl font-bold text-white">12+</div>
            <div className="text-white/70 text-xs sm:text-sm">Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
};