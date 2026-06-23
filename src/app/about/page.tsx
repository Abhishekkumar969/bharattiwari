import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import FooterStats from '@/components/FooterStats';

export default function About() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <AboutSection />
      </div>
      <FooterStats />
    </main>
  );
}
