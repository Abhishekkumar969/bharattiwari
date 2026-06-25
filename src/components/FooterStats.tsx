"use client";

import styles from './FooterStats.module.css';
import { Users, MapPin, Building2, Map } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path d="M15 12h-2v8h-3v-8H8v-3h2V6.5C10 4.6 11 3 14 3h3v3h-2c-.5 0-1 .5-1 1v2h3l-1 3z" fill="white" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <circle cx="12" cy="12" r="12" fill="#1DA1F2" />
    <path d="M18.2 8.1c.1 1.7-.5 3.3-1.6 4.7-2.3 2.7-5.9 3.5-9.2 2.3.9.1 1.8 0 2.6-.3-1.5-.3-2.6-1.5-2.8-3 .4.1.9.1 1.3 0-1.6-.4-2.7-1.8-2.6-3.4.5.3 1 .4 1.5.4-1-.7-1.6-1.9-1.3-3.1 1.7 2 4.2 3.3 6.9 3.4-.4-1.8 1-3.6 2.9-3.5 1 .1 1.9.5 2.5 1.3.8-.2 1.6-.5 2.3-.9-.3.8-.8 1.5-1.5 1.9.7-.1 1.4-.3 2.1-.6-.5.7-1.1 1.3-1.8 1.8z" fill="white" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="40" height="40">
    <defs>
      <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="12" fill="url(#igGradient)" />
    <path d="M12 6.5c-1.8 0-2 .1-2.7.1-1.1.1-1.7.5-2 1.1-.3.3-.7.9-.8 2-.1.7-.1.9-.1 2.7s0 2 .1 2.7c.1 1.1.5 1.7 1.1 2 .3.3.9.7 2 .8.7.1.9.1 2.7.1s2 0 2.7-.1c1.1-.1 1.7-.5 2-1.1.3-.3.7-.9.8-2 .1-.7.1-.9.1-2.7s0-2-.1-2.7c-.1-1.1-.5-1.7-1.1-2-.3-.3-.9-.7-2-.8-.7-.1-.9-.1-2.7-.1zm0 1.2c1.8 0 2 0 2.6.1.6 0 .9.2 1.1.3.3.3.4.6.4 1.1.1.6.1.8.1 2.6s0 2-.1 2.6c0 .6-.2.9-.3 1.1-.3.3-.6.4-1.1.4-.6.1-.8.1-2.6.1s-2 0-2.6-.1c-.6 0-.9-.2-1.1-.3-.3-.3-.4-.6-.4-1.1-.1-.6-.1-.8-.1-2.6s0-2 .1-2.6c0-.6.2-.9.3-1.1.3-.3.6-.4 1.1-.4.6-.1.8-.1 2.6-.1zm0 2.1c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3-1-2.3-2.3-2.3zm0 3.4c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm1.5-4c0-.2.2-.4.4-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4z" fill="white" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <circle cx="12" cy="12" r="12" fill="#FF0000" />
    <path d="M16 12l-6 3.5v-7l6 3.5z" fill="white" />
  </svg>
);

const UsersSVG = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const VillageSVG = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22V9l8-5 8 5v13" />
    <path d="M9 22v-5h6v5" />
    <path d="M2 10h20" />
    <path d="M12 4v5" />
  </svg>
);

const ScaleSVG = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

const NetworkSVG = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffb703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M3 12h5" />
    <path d="M16 12h5" />
    <path d="M12 3v5" />
    <path d="M12 16v5" />
    <path d="m5 5 3.5 3.5" />
    <path d="m19 19-3.5-3.5" />
    <path d="m5 19 3.5-3.5" />
    <path d="m19 5-3.5 3.5" />
  </svg>
);

export default function FooterStats() {
  const { t } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <UsersSVG />
            <div className={styles.statInfo}>
              <p className={styles.statNumber}>1,25,783+</p>
              <p className={styles.statLabel}>{t('footer.stat1')}</p>
            </div>
          </div>

          <div className={styles.statItem}>
            <VillageSVG />
            <div className={styles.statInfo}>
              <p className={styles.statNumber}>356+</p>
              <p className={styles.statLabel}>{t('footer.stat2')}</p>
            </div>
          </div>

          <div className={styles.statItem}>
            <ScaleSVG />
            <div className={styles.statInfo}>
              <p className={styles.statNumber}>50+</p>
              <p className={styles.statLabel}>{t('footer.stat3')}</p>
            </div>
          </div>

          <div className={styles.statItem}>
            <NetworkSVG />
            <div className={styles.statInfo}>
              <p className={styles.statNumber}>25+</p>
              <p className={styles.statLabel}>{t('footer.stat4')}</p>
            </div>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <p className={styles.socialLabel}>{t('footer.social')}</p>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/justiceforbharatbhushantiwari/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
