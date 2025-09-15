import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Target, number: '50+', label: 'Breed Types Supported' },
    { icon: Users, number: '10K+', label: 'Farmers Using Platform' },
    { icon: Award, number: '95%+', label: 'Accuracy Rate' },
    { icon: TrendingUp, number: '24/7', label: 'Continuous Learning' }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <span className="text-accent font-semibold">About Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.desc')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Bridging Traditional Farming with Modern Technology
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our mission is to democratize livestock breed identification technology, making it accessible to every farmer, veterinarian, and researcher across India. We understand the challenges faced by rural communities and have designed our platform to address them directly.
              </p>
              <p>
                By combining state-of-the-art artificial intelligence with deep domain expertise in Indian livestock, we're creating tools that not only identify breeds but also provide actionable insights for better livestock management.
              </p>
              <p>
                Our team consists of AI researchers, agricultural experts, and rural development specialists who are passionate about transforming the agricultural landscape through technology.
              </p>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary-glow/10 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-3 bg-white rounded-full mb-3 shadow-sm">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-elegant p-6 text-center animate-slide-up">
            <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Our Mission</h4>
            <p className="text-muted-foreground text-sm">
              To empower farmers with accessible, accurate, and affordable breed identification technology that enhances livestock productivity and sustainability.
            </p>
          </Card>

          <Card className="card-elegant p-6 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-accent/10 p-3 rounded-full inline-flex mb-4">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Our Vision</h4>
            <p className="text-muted-foreground text-sm">
              A future where every farmer has access to advanced agricultural technology, regardless of their location or economic status.
            </p>
          </Card>

          <Card className="card-elegant p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary-glow/10 p-3 rounded-full inline-flex mb-4">
              <Award className="h-6 w-6 text-primary-glow" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Our Impact</h4>
            <p className="text-muted-foreground text-sm">
              Helping thousands of farmers make informed decisions about their livestock, leading to improved yields and better livelihoods.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};