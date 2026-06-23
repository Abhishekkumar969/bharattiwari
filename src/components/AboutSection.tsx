import styles from './AboutSection.module.css';
import { Info, AlertTriangle, Scale, UserCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>भरत तिवारी कौन थे?</h2>
          <div className={styles.underline}></div>
          <p className={styles.introText}>
            भरत भूषण तिवारी बिहार के भोजपुर (आरा) जिले के बिलौटी गांव के रहने वाले एक सामाजिक कार्यकर्ता थे, जिनकी जून 2026 में पुलिस मुठभेड़ (एनकाउंटर) के दौरान मौत हो गई। उनकी मृत्यु के बाद से पूरे बिहार में भारी राजनीतिक और सामाजिक बवाल खड़ा हो गया है।
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <UserCheck className={styles.icon} size={28} />
              <h3>सामाजिक पृष्ठभूमि व सक्रियता</h3>
            </div>
            <ul className={styles.list}>
              <li>
                <strong>सामाजिक पृष्ठभूमि:</strong> स्थानीय लोग उन्हें एक सामाजिक कार्यकर्ता के रूप में जानते थे। वे बाढ़ पीड़ितों की मदद करने और जनता की समस्याओं को अधिकारियों के सामने उठाने के लिए सक्रिय रहते थे।
              </li>
              <li>
                <strong>सोशल मीडिया पर सक्रियता:</strong> उन्होंने सोशल मीडिया पर सिस्टम के खिलाफ कई पोस्ट किए थे और भ्रष्ट अधिकारियों को चेतावनी दी थी।
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <AlertTriangle className={styles.icon} size={28} />
              <h3>एनकाउंटर का पूरा मामला</h3>
            </div>
            <ul className={styles.list}>
              <li>
                <strong>पुलिस का पक्ष:</strong> पुलिस के अनुसार, उनके पास अवैध हथियार था। पूछताछ के दौरान कथित तौर पर फायरिंग हुई, जिसके जवाब में पुलिस ने कार्रवाई की।
              </li>
              <li>
                <strong>परिवार और ग्रामीणों का आरोप:</strong> परिजनों का आरोप है कि यह एक फर्जी एनकाउंटर है। वायरल वीडियो के अनुसार उन्होंने पिस्तौल फेंक कर सरेंडर कर दिया था, फिर भी उन्हें जानबूझकर गोलियां मारी गईं।
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Scale className={styles.icon} size={28} />
              <h3>वर्तमान स्थिति और कानूनी कार्रवाई</h3>
            </div>
            <ul className={styles.list}>
              <li>
                <strong>न्यायिक जांच:</strong> जन आक्रोश को देखते हुए बिहार सरकार ने हाई कोर्ट के सेवानिवृत्त जज से न्यायिक जांच के आदेश दिए हैं।
              </li>
              <li>
                <strong>पुलिसकर्मियों पर गाज:</strong> शाहपुर थाना प्रभारी (SHO) समेत चार पुलिसकर्मियों को निलंबित कर दिया गया है।
              </li>
              <li>
                <strong>सुप्रीम कोर्ट में मामला:</strong> सुप्रीम कोर्ट में PIL दायर कर स्वतंत्र पैनल और CBI जांच की मांग की गई है।
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
