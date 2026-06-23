import styles from './CallToAction.module.css';
import Image from 'next/image';

export default function CallToAction() {
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
            हमें ऐसा बिहार चाहिए जहाँ युवाओं को हथियार नहीं,<br />
            शिक्षा, अवसर और न्याय मिले। जहाँ महिलाओं को भय नहीं, सुरक्षा मिले।<br />
            और जहाँ हर परिवार को सम्मान के साथ जीने का अधिकार मिले।
          </h2>
        </div>

        <div className={styles.action}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvdDkTGyspByYYDx7ovWdH7_maFl466SMKxXnx0mAff-YEXQ/viewform" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} style={{ textDecoration: 'none', display: 'inline-block' }}>जन समर्थन दें</a>
          <p className={styles.subtext}>आपका समर्थन, बदलाव की शुरुआत है।</p>
        </div>
      </div>
    </section>
  );
}
