"use client";

import styles from './HeroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SupportButton from './SupportButton';
import { useLanguage } from '../context/LanguageContext';

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
const EyeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
);
const CheckCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/bharattiwariji.png"
              alt="Bharat Tiwari"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageOverlayGradient}></div>
          </div>
          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>{t('hero.quote')}</p>
            <p className={styles.quoteAuthor}>{t('hero.author')}</p>
          </div>
        </div>

        <div className={styles.rightContent}>
          <h2 className={styles.preTitle}>{t('hero.preTitle')}</h2>
          <h1 className={styles.mainTitle}>{t('hero.mainTitle')}</h1>
          <p className={styles.subtitle}>
            {t('hero.subtitle')}
          </p>

          <div className={styles.actionButtons}>
            <SupportButton className={`${styles.btn} ${styles.btnPrimary}`} style={{ textDecoration: 'none' }}>
              <DocIcon /> {t('hero.support')}
            </SupportButton>
            <Link href="/demands" className={`${styles.btn} ${styles.btnSecondary}`} style={{ textDecoration: 'none' }}>
              <FistIcon /> {t('hero.readDemands')}
            </Link>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statsGridTop}>
              <div className={styles.statItem}>
                <div className={styles.statIconWrapper}><EduIcon /></div>
                <div>
                  <p className={styles.statTitle}>{t('hero.education')}</p>
                  <p className={styles.statSub}>{t('hero.eduSub')}</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIconWrapper}><HealthIcon /></div>
                <div>
                  <p className={styles.statTitle}>{t('hero.health')}</p>
                  <p className={styles.statSub}>{t('hero.healthSub')}</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIconWrapper}><ShieldIcon /></div>
                <div>
                  <p className={styles.statTitle}>{t('hero.security')}</p>
                  <p className={styles.statSub}>{t('hero.secSub')}</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIconWrapper}><RespectIcon /></div>
                <div>
                  <p className={styles.statTitle}>{t('hero.respect')}</p>
                  <p className={styles.statSub}>{t('hero.respectSub')}</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIconWrapper}><JusticeIcon /></div>
                <div>
                  <p className={styles.statTitle}>{t('hero.justice')}</p>
                  <p className={styles.statSub}>{t('hero.justiceSub')}</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIconWrapper}><EyeIcon /></div>
                <div>
                  <p className={styles.statTitle}>{t('hero.transparency')}</p>
                  <p className={styles.statSub}>{t('hero.transSub')}</p>
                </div>
              </div>
            </div>
            <div className={styles.statItemFull}>
              <div className={styles.statIconWrapper}><CheckCircleIcon /></div>
              <div>
                <p className={styles.statTitle}>{t('hero.promises')}</p>
                <p className={styles.statSub}>{t('hero.promisesSub')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
