import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation object
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'auth.login': 'Sign In',
    'auth.signup': 'Sign Up',
    
    // Hero Section
    'hero.title': 'AI-Powered Cattle & Buffalo Breed Recognition',
    'hero.subtitle': 'Instantly identify Indian cattle and buffalo breeds with advanced AI technology. Empowering farmers, veterinarians, and researchers with accurate breed information.',
    'hero.cta.primary': 'Start Recognition',
    'hero.cta.secondary': 'Learn More',
    
    // Features
    'features.title': 'Revolutionary Features',
    'features.subtitle': 'Advanced AI technology designed specifically for Indian livestock',
    'feature.recognition.title': 'Instant Breed Recognition',
    'feature.recognition.desc': 'Upload or capture an image and get instant breed identification with detailed information.',
    'feature.database.title': 'Comprehensive Database',
    'feature.database.desc': 'Access detailed information about milk yield, origin, and physical characteristics.',
    'feature.multilingual.title': 'Multi-Language Support',
    'feature.multilingual.desc': 'Available in 12+ Indian languages for accessibility across all regions.',
    'feature.offline.title': 'Works Everywhere',
    'feature.offline.desc': 'Designed to work in rural areas with minimal internet connectivity.',
    
    // About
    'about.title': 'About Our Platform',
    'about.desc': 'We combine cutting-edge AI technology with deep understanding of Indian livestock to create a tool that empowers farmers and researchers alike.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.desc': 'Have questions or need support? We are here to help.',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.features': 'विशेषताएं',
    'nav.about': 'बारे में',
    'nav.contact': 'संपर्क',
    'auth.login': 'साइन इन',
    'auth.signup': 'साइन अप',
    
    // Hero Section
    'hero.title': 'AI-संचालित गाय और भैंस की नस्ल पहचान',
    'hero.subtitle': 'उन्नत AI तकनीक के साथ भारतीय गाय और भैंस की नस्लों की तुरंत पहचान करें। किसानों, पशु चिकित्सकों और शोधकर्ताओं को सटीक नस्ल की जानकारी प्रदान करना।',
    'hero.cta.primary': 'पहचान शुरू करें',
    'hero.cta.secondary': 'और जानें',
    
    // Features
    'features.title': 'क्रांतिकारी विशेषताएं',
    'features.subtitle': 'भारतीय पशुधन के लिए विशेष रूप से डिज़ाइन की गई उन्नत AI तकनीक',
    'feature.recognition.title': 'तत्काल नस्ल पहचान',
    'feature.recognition.desc': 'एक तस्वीर अपलोड करें या कैप्चर करें और विस्तृत जानकारी के साथ तत्काल नस्ल की पहचान पाएं।',
    'feature.database.title': 'व्यापक डेटाबेस',
    'feature.database.desc': 'दूध की उपज, मूल स्थान और भौतिक विशेषताओं की विस्तृत जानकारी प्राप्त करें।',
    'feature.multilingual.title': 'बहुभाषी समर्थन',
    'feature.multilingual.desc': 'सभी क्षेत्रों में पहुंच के लिए 12+ भारतीय भाषाओं में उपलब्ध।',
    'feature.offline.title': 'हर जगह काम करता है',
    'feature.offline.desc': 'न्यूनतम इंटरनेट कनेक्टिविटी के साथ ग्रामीण क्षेत्रों में काम करने के लिए डिज़ाइन किया गया।',
    
    // About
    'about.title': 'हमारे प्लेटफॉर्म के बारे में',
    'about.desc': 'हम अत्याधुनिक AI तकनीक को भारतीय पशुधन की गहरी समझ के साथ जोड़कर एक ऐसा उपकरण बनाते हैं जो किसानों और शोधकर्ताओं दोनों को सशक्त बनाता है।',
    
    // Contact
    'contact.title': 'संपर्क में रहें',
    'contact.desc': 'कोई प्रश्न या सहायता चाहिए? हम यहाँ मदद के लिए हैं।',
  },
  // Add more translations for other languages as needed
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language.code);
  };

  const t = (key: string): string => {
    const translation = translations[currentLanguage.code]?.[key] || translations['en'][key] || key;
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};