import Navbar from '@/components/Navbar';
import DemandsSection from '@/components/DemandsSection';
import DetailedDemand from '@/components/DetailedDemand';
import FooterStats from '@/components/FooterStats';

export default function DemandsPage() {
  return (
    <main>
      <Navbar />
      <DemandsSection />
      <DetailedDemand />
      <FooterStats />
    </main>
  );
}
