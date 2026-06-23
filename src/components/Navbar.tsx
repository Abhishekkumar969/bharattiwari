import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle}>
          <Image 
            src="/images/bharattiwarijustice.png" 
            alt="Bharat Tiwari Logo" 
            width={50} 
            height={50} 
            className={styles.logoImage} 
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <div className={styles.logoText}>
          <h1>भारत भूषण तिवारी</h1>
          <p>न्याय दो, बिहार बदलो</p>
        </div>
      </div>

      <div className={styles.navLinks}>
        <Link href="/" className={styles.active}>होम</Link>
        <Link href="/about">भारत तिवारी कौन थे?</Link>
        <Link href="/demands">हमारी माँगें</Link>
      </div>

      <div className={styles.ctaContainer}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvdDkTGyspByYYDx7ovWdH7_maFl466SMKxXnx0mAff-YEXQ/viewform" target="_blank" rel="noopener noreferrer" className={styles.ctaButton} style={{ textDecoration: 'none' }}>जन समर्थन दें</a>
      </div>
    </nav>
  );
}
