import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import AIPassportSection from '@/components/AIPassportSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import AICopilotButton from '@/components/AICopilotButton';
import Footer from '@/components/Footer';

const Index = () => {
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
      <AICopilotButton />
    </div>
  );
};

export default Index;
