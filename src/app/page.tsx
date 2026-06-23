import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DemandsSection from '@/components/DemandsSection';
import DetailedDemand from '@/components/DetailedDemand';
import CallToAction from '@/components/CallToAction';
import FooterStats from '@/components/FooterStats';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DemandsSection />
      <DetailedDemand />
      <CallToAction />
      <FooterStats />
    </main>
  );
}
