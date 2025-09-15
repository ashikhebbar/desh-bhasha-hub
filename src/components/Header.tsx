import React, { useState } from 'react';
import { Menu, X, Camera, LogIn, UserPlus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">BreedAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="ghost" size="sm">
              <LogIn className="h-4 w-4 mr-2" />
              {t('auth.login')}
            </Button>
            <Button className="btn-hero" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              {t('auth.signup')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  <LogIn className="h-4 w-4 mr-2" />
                  {t('auth.login')}
                </Button>
                <Button className="btn-hero justify-start" size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  {t('auth.signup')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};