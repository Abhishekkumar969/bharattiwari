"use client";

import styles from './CallToAction.module.css';
import Image from 'next/image';
import SupportButton from './SupportButton';
import { useLanguage } from '../context/LanguageContext';

export default function CallToAction() {
  const { t } = useLanguage();
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.fistGraphic}>
          <Image
            src="/images/bharattiwarilogo.jpeg"
            alt="Bharat Tiwari Logo"
            width={150}
            height={150}
            className={styles.fist}
            style={{ objectFit: 'contain', width: 'auto' }}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.text}>
            {t('cta.text')}
          </h2>
        </div>

        <div className={styles.action}>
          <SupportButton className={styles.btnPrimary} style={{ textDecoration: 'none', display: 'inline-block' }}>{t('cta.supportBtn')}</SupportButton>
          <p className={styles.subtext}>{t('cta.subtext')}</p>
        </div>
      </div>
    </section>
  );
}
