"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './DetailedDemand.module.css';
import { useLanguage } from '../context/LanguageContext';
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const WavesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M2 6c.6.5 1.2 1 2.5 1 1.5 0 2-.5 3-1 1.5-1 2-1 3.5-1 1.5 0 2 .5 3 1 1 .5 1.5 1 2.5 1 1.5 0 2-.5 3-1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 1.5 0 2-.5 3-1 1.5-1 2-1 3.5-1 1.5 0 2 .5 3 1 1 .5 1.5 1 2.5 1 1.5 0 2-.5 3-1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 1.5 0 2-.5 3-1 1.5-1 2-1 3.5-1 1.5 0 2 .5 3 1 1 .5 1.5 1 2.5 1 1.5 0 2-.5 3-1" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const cardsData = [
  {
    icon: HomeIcon,
    iconClass: styles.iconDarkBlue,
    title: "पहले पुनर्वास, फिर कार्रवाई",
    items: [
      "किसी भी नागरिक का घर, दुकान, जमीन बिना पुनर्वास के नहीं तोड़ा जाए।",
      "वैकल्पिक आवास की व्यवस्था पहले सुनिश्चित हो।",
      "पुनर्वास नीति को कानूनी रूप से बाध्यकारी बनाया जाए।",
      "प्रभावित परिवारों की सहमति और गरिमा का सम्मान हो।"
    ]
  },
  {
    icon: WavesIcon,
    iconClass: styles.iconTeal,
    title: "बाढ़ प्रभावित क्षेत्रों के लिए स्थायी समाधान",
    items: [
      "नदी कटाव एवं बाढ़ नियंत्रण के लिए दीर्घकालिक योजना बने।",
      "तटबंध, जल निकासी और तालाबों का वैज्ञानिक प्रबंधन हो।",
      "पुनर्वास स्थलों पर स्थायी आवास और बुनियादी ढांचा तैयार किया जाए।",
      "हर वर्ष अस्थायी इंतजाम की जगह स्थायी और टिकाऊ समाधान हो।"
    ]
  },
  {
    icon: SearchIcon,
    iconClass: styles.iconPurple,
    title: "आपदा राहत निधि के उपयोग में पूर्ण पारदर्शिता",
    items: [
      "कितनी राशि आई, कहाँ खर्च हुई – सार्वजनिक पोर्टल पर जानकारी हो।",
      "ग्राम पंचायत स्तर तक फंड उपयोग का खुलासा हो।",
      "सामाजिक अंकेक्षण (सोशल ऑडिट) अनिवार्य हो।",
      "फर्जीवाड़े और घोटाले पर तत्काल एफआईआर और वसूली हो।"
    ]
  },
  {
    icon: ShieldCheckIcon,
    iconClass: styles.iconOrange,
    title: "हर वर्ष होने वाले फंड के दुरुपयोग पर सख्त निगरानी और जवाबदेही",
    items: [
      "हर साल बाढ़ के नाम पर होने वाले खर्च की उच्च स्तरीय जाँच हो।",
      "जिम्मेदार अधिकारियों की जवाबदेही तय कर सख्त दंड दिया जाए।",
      "जनता की निगरानी हेतु हेल्पलाइन और शिकायत पोर्टल हो।",
      "गलत पाए जाने पर सेवा से बर्खास्तगी और संपत्ति की जब्ती हो।"
    ]
  }
];

export default function DetailedDemand() {
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const cardsData = Array.from({ length: 4 }).map((_, i) => ({
    icon: [HomeIcon, WavesIcon, SearchIcon, ShieldCheckIcon][i],
    iconClass: [styles.iconDarkBlue, styles.iconTeal, styles.iconPurple, styles.iconOrange][i],
    title: t(`detailedDemand.c${i + 1}.title`),
    items: [
      t(`detailedDemand.c${i + 1}.i1`),
      t(`detailedDemand.c${i + 1}.i2`),
      t(`detailedDemand.c${i + 1}.i3`),
      t(`detailedDemand.c${i + 1}.i4`),
    ]
  }));

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section className={styles.detailedDemand}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('detailedDemand.title')}</h2>
        
        <div className={styles.grid}>
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            const isExpanded = expandedCards.includes(index);
            
            return (
              <div 
                key={index} 
                className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconWrapper} ${card.iconClass}`}>
                    <Icon />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <div className={styles.toggleIcon}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                {isExpanded && (
                  <ul className={styles.list}>
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
