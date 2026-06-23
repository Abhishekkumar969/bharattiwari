"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Image from 'next/image';
import SupportButton from './SupportButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle}>
          <Image 
            src="/images/bharattiwarijustice.png" 
            alt="Bharat Tiwari Logo" 
            width={75} 
            height={75} 
            className={styles.logoImage} 
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <div className={styles.logoText}>
          <h1>{t('navbar.title')}</h1>
          <p>{t('navbar.subtitle')}</p>
        </div>
      </div>

      <div className={styles.navLinks}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>{t('navbar.home')}</Link>
        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>{t('navbar.about')}</Link>
        <Link href="/demands" className={pathname === "/demands" ? styles.active : ""}>{t('navbar.demands')}</Link>
      </div>

      <div className={styles.ctaContainer} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <LanguageSwitcher />
        <SupportButton className={styles.ctaButton} style={{ textDecoration: 'none' }}>{t('navbar.support')}</SupportButton>
      </div>
    </nav>
  );
}
