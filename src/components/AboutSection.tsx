"use client";

import styles from './AboutSection.module.css';
import { Info, AlertTriangle, Scale, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <div className={styles.underline}></div>
          <p className={styles.introText}>
            {t('about.intro')}
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <UserCheck className={styles.icon} size={28} />
              <h3>{t('about.card1.title')}</h3>
            </div>
            <ul className={styles.list}>
              <li>
                {t('about.card1.item1')}
              </li>
              <li>
                {t('about.card1.item2')}
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <AlertTriangle className={styles.icon} size={28} />
              <h3>{t('about.card2.title')}</h3>
            </div>
            <ul className={styles.list}>
              <li>
                {t('about.card2.item1')}
              </li>
              <li>
                {t('about.card2.item2')}
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Scale className={styles.icon} size={28} />
              <h3>{t('about.card3.title')}</h3>
            </div>
            <ul className={styles.list}>
              <li>
                {t('about.card3.item1')}
              </li>
              <li>
                {t('about.card3.item2')}
              </li>
              <li>
                {t('about.card3.item3')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
