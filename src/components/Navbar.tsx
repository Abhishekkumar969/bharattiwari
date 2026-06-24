"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Image from 'next/image';
import SupportButton from './SupportButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <Link href="/" style={{ textDecoration: 'none' }}>
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
      </Link>

      <div className={styles.navLinks}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>{t('navbar.home')}</Link>
        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>{t('navbar.about')}</Link>
        <Link href="/demands" className={pathname === "/demands" ? styles.active : ""}>{t('navbar.demands')}</Link>
      </div>

      <div className={styles.ctaContainer}>
        <LanguageSwitcher />
        <SupportButton className={styles.ctaButton} style={{ textDecoration: 'none' }}>{t('navbar.support')}</SupportButton>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} color="var(--text-light)" /> : <Menu size={24} color="var(--text-light)" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={pathname === "/" ? styles.active : ""} onClick={closeMenu}>{t('navbar.home')}</Link>
          <Link href="/about" className={pathname === "/about" ? styles.active : ""} onClick={closeMenu}>{t('navbar.about')}</Link>
          <Link href="/demands" className={pathname === "/demands" ? styles.active : ""} onClick={closeMenu}>{t('navbar.demands')}</Link>
        </div>
      )}
    </nav>
  );
}
