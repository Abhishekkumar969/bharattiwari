import styles from './HeroSection.module.css';
import Image from 'next/image';

const FistIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 5-5v-5a5 5 0 0 0-5-5Z" />
  </svg>
);

const DocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);

const EduIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
);
const HealthIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const RespectIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4" /><path d="M5.5 21v-2a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5v2" /></svg>
);
const JusticeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>
);

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/bharattiwariji.png"
              alt="Bharat Tiwari"
              fill
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageOverlayGradient}></div>
          </div>
          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>"क्रांति की तलवार विचारों की शान पर तेज होती है।"</p>
            <p className={styles.quoteAuthor}>- भगत सिंह</p>
          </div>
        </div>

        <div className={styles.rightContent}>
          <h2 className={styles.preTitle}>न्याय दो,</h2>
          <h1 className={styles.mainTitle}>बिहार बदलो!</h1>
          <p className={styles.subtitle}>
            अन्याय के खिलाफ आवाज़ उठाएं, व्यवस्था बदलें,<br />
            ताकि किसी और भारत तिवारी को हथियार न उठाना पड़े।
          </p>

          <div className={styles.actionButtons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              <FistIcon /> हमारी माँगें पढ़ें
            </button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvdDkTGyspByYYDx7ovWdH7_maFl466SMKxXnx0mAff-YEXQ/viewform" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{ textDecoration: 'none' }}>
              <DocIcon /> जन समर्थन दें
            </a>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}><EduIcon /></div>
              <div>
                <p className={styles.statTitle}>शिक्षा</p>
                <p className={styles.statSub}>हर बच्चे का अधिकार</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}><HealthIcon /></div>
              <div>
                <p className={styles.statTitle}>स्वास्थ्य</p>
                <p className={styles.statSub}>हर नागरिक का अधिकार</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}><ShieldIcon /></div>
              <div>
                <p className={styles.statTitle}>सुरक्षा</p>
                <p className={styles.statSub}>हर महिला का अधिकार</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}><RespectIcon /></div>
              <div>
                <p className={styles.statTitle}>सम्मान</p>
                <p className={styles.statSub}>हर इंसान का अधिकार</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIconWrapper}><JusticeIcon /></div>
              <div>
                <p className={styles.statTitle}>न्याय</p>
                <p className={styles.statSub}>हर पीड़ित का अधिकार</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
