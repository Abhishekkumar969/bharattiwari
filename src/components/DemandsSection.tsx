"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './DemandsSection.module.css';
import { useLanguage } from '../context/LanguageContext';
const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M12 2L2 7v14h20V7L12 2z" />
    <path d="M12 22v-6H8v6" />
    <path d="M16 22v-4" />
    <path d="M16 14v-2" />
    <path d="M8 10h8" />
  </svg>
);

const HospitalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M4 22V6l8-4 8 4v16" />
    <path d="M12 22V14" />
    <path d="M9 10h6" />
    <path d="M12 7v6" />
  </svg>
);

const RoadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M12 20v-2" />
    <path d="M12 14v-2" />
    <path d="M12 8v-2" />
    <path d="M4 22l6-18" />
    <path d="M20 22l-6-18" />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M12 2L2 20h20L12 2z" />
    <path d="M12 8v6" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M12 12v.01" />
  </svg>
);

const PoliceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polygon points="12 8 13.5 10.5 16.5 11 14.5 13 15 16 12 14.5 9 16 9.5 13 7.5 11 10.5 10.5 12 8" />
  </svg>
);

const PlantIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M12 22V10" />
    <path d="M12 10a4 4 0 0 1 4-4c0 4-4 4-4 4z" />
    <path d="M12 14a4 4 0 0 0-4-4c0 4 4 4 4 4z" />
  </svg>
);

const DocSearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 2v6h6" />
    <circle cx="11.5" cy="14.5" r="2.5" />
    <path d="M13.27 16.27L16 19" />
  </svg>
);

const WomenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <circle cx="9" cy="5" r="2" />
    <path d="M9 7L6 14h2l1 8h2l1-8h2l-3-7z" />
    <circle cx="17" cy="5" r="2" />
    <path d="M17 7l-2 5h1l1 5h2l1-5h1l-2-5z" />
  </svg>
);

const HouseFloodIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M3 12l9-9 9 9" />
    <path d="M5 10v10h14V10" />
    <path d="M2 18s2-2 4 0 4 2 6 0 4-2 6 0" />
    <path d="M2 22s2-2 4 0 4 2 6 0 4-2 6 0" />
  </svg>
);

const ThreePeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
    <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M2 21v-2a4 4 0 0 1 3-3.87" />
    <path d="M8 3.13a4 4 0 0 0 0 7.75" />
  </svg>
);

const demands = [
  {
    icon: <SchoolIcon />,
    title: 'हर पंचायत/प्रखंड में गुणवत्तापूर्ण सरकारी स्कूल',
    description: 'सभी बच्चों को अच्छी शिक्षा, योग्य शिक्षक, पुस्तकालय, खेल और डिजिटल सुविधाएँ उपलब्ध हों।'
  },
  {
    icon: <HospitalIcon />,
    title: 'प्रत्येक प्रखंड में आधुनिक सरकारी अस्पताल',
    description: 'विशेषज्ञ डॉक्टर, दवाइयाँ, जाँच सुविधा और 24x7 आपातकालीन सेवाएँ सुनिश्चित की जाएँ।'
  },
  {
    icon: <RoadIcon />,
    title: 'हर गाँव तक सड़क, बिजली, पानी और इंटरनेट',
    description: 'मूलभूत सुविधाएँ हर नागरिक तक पहुँचें, ताकि सभी को विकास का समान अवसर मिले।'
  },
  {
    icon: <WarningIcon />,
    title: 'भ्रष्टाचार मुक्त और जवाबदेह शासन',
    description: 'सरकारी कामकाज में पारदर्शिता, अधिकारियों की जवाबदेही तय हो और भ्रष्टाचार पर सख्त कार्रवाई हो।'
  },
  {
    icon: <BriefcaseIcon />,
    title: 'युवाओं के लिए रोजगार और कौशल विकास',
    description: 'स्थानीय स्तर पर रोजगार के अवसर, स्टार्टअप को बढ़ावा और कौशल विकास केंद्र स्थापित किए जाएँ।'
  },
  {
    icon: <PoliceIcon />,
    title: 'पुलिस सुधार और मानवाधिकारों का सम्मान',
    description: 'पुलिस व्यवस्था को संवेदनशील, पारदर्शी और जनता के प्रति उत्तरदायी बनाया जाए, पुलिस अत्याचार पर रोक हो।'
  },
  {
    icon: <PlantIcon />,
    title: 'किसानों के लिए उचित मूल्य और सहायता',
    description: 'फसल का उचित मूल्य, सिंचाई, बीज, खाद और सरकारी सहायता समय पर और पारदर्शी तरीके से मिले।'
  },
  {
    icon: <DocSearchIcon />,
    title: 'सूचना का अधिकार और सरकारी पारदर्शिता',
    description: 'हर सरकारी योजना, खर्च और निर्णय की जानकारी जनता के लिए सुलभ हो और RTI को प्रभावी बनाया जाए।'
  },
  {
    icon: <WomenIcon />,
    title: 'महिलाओं की सुरक्षा और सम्मान',
    description: 'महिलाओं के खिलाफ अपराधों पर त्वरित कार्रवाई, सुरक्षित सार्वजनिक स्थान, हेल्पलाइन और फास्ट ट्रैक न्याय व्यवस्था हो।'
  },
  {
    icon: <HouseFloodIcon />,
    title: 'पुनर्वास और आपदा राहत की संवैधानिक गारंटी',
    description: 'किसी का घर बिना पुनर्वास के न तोड़ा जाए और आपदा (बाढ़) में हर प्रभावित परिवार को गरिमापूर्ण जीवन की आवश्यक सुविधाएँ मिलें।'
  },
  {
    icon: <ThreePeopleIcon />,
    title: 'कमजोर वर्गों के अधिकार और सामाजिक न्याय',
    description: 'दलित, पिछड़े, आदिवासी, अल्पसंख्यक और सभी कमजोर वर्गों के अधिकारों की रक्षा और समान अवसर सुनिश्चित हो।'
  }
];

export default function DemandsSection() {
  const { t } = useLanguage();
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  // Dynamically load demands from translations to avoid keeping an outdated static array
  const demandsData = Array.from({ length: 11 }).map((_, i) => ({
    icon: [
      <SchoolIcon key={0} />, <HospitalIcon key={1} />, <RoadIcon key={2} />,
      <WarningIcon key={3} />, <BriefcaseIcon key={4} />, <PoliceIcon key={5} />,
      <PlantIcon key={6} />, <DocSearchIcon key={7} />, <WomenIcon key={8} />,
      <HouseFloodIcon key={9} />, <ThreePeopleIcon key={10} />
    ][i],
    title: t(`demands.d${i + 1}.title`),
    description: t(`demands.d${i + 1}.desc`)
  }));

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className={styles.demandsSection} id="demands">
      <div className={styles.header}>
        <div className={styles.line}></div>
        <h2 className={styles.title}>{t('demands.title')}</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {demandsData.map((demand, index) => {
          const isExpanded = expandedIndices.includes(index);

          let orderClass = '';
          if (index === 10) {
            orderClass = styles.orderMiddle; // order: 2
          } else if (index === 9) {
            orderClass = styles.orderLate;   // order: 3
          } else {
            orderClass = styles.orderEarly;  // order: 1 (0 to 8)
          }

          if (index === 10) {
            return (
              <div key={index} className={`${styles.card} ${styles.highlightedCard} ${orderClass}`}>
                <div className={styles.highlightedHeader}>
                  <div className={styles.highlightedIconWrapper}>
                    <div className={styles.iconCircle}>{demand.icon}</div>
                  </div>
                  <h3 className={styles.highlightedTitle}>{demand.title}</h3>
                </div>
                <div className={`${styles.hideOnMobile} ${isExpanded ? styles.showOnMobile : ''} ${styles.alwaysOpenDesktop} ${styles.highlightedBody}`}>
                  <div className={styles.highlightedDesc} dangerouslySetInnerHTML={{ __html: demand.description }} />
                </div>
                <div className={styles.expandWrapper}>
                  <button className={styles.expandBtn} onClick={() => toggleExpand(index)}>
                    {t('demands.expand')}  <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            );
          }

          // Determine icon color class based on index
          const colorClasses = [
            styles.iconGreen, styles.iconRed, styles.iconBlue, styles.iconOrange,
            styles.iconPurple, styles.iconIndigo, styles.iconGreen, styles.iconTeal,
            styles.iconRed, styles.iconPink, styles.iconOrange
          ];

          const isAlwaysOpen = false; // We can adjust this if needed
          const alwaysOpenDesktopClass = isAlwaysOpen ? styles.alwaysOpenDesktop : '';
          const hideChevronDesktopClass = isAlwaysOpen ? styles.hideChevronDesktop : '';

          return (
            <div key={index} className={`${styles.card} ${orderClass}`}>
              <div className={styles.cardHeader} onClick={() => toggleExpand(index)}>
                <div className={`${styles.iconContainer} ${colorClasses[index]}`}>
                  {demand.icon}
                </div>
                <h3 className={styles.cardTitle}>
                  {demand.title}
                </h3>
                <div className={`${styles.chevronContainer} ${hideChevronDesktopClass}`}>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              <div className={`${styles.cardBody} ${isExpanded ? styles.expanded : ''} ${alwaysOpenDesktopClass}`}>
                <div className={styles.cardDesc} dangerouslySetInnerHTML={{ __html: demand.description }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
