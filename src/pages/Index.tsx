import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import AIPassportSection from '@/components/AIPassportSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScheduleSection />
        <ActivitiesSection />
        <AIPassportSection />
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
