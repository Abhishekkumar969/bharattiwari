"use client";

import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import styles from './SupportModal.module.css';
import { useLanguage } from '../context/LanguageContext';

interface SupportButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function SupportButton({ className, style, children }: SupportButtonProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    city: '',
    occupation: '',
    remarks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'support_submissions'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      alert(t('form.success'));
      setIsOpen(false);
      
      // Reset form
      setFormData({
        fullName: '',
        mobileNumber: '',
        city: '',
        occupation: '',
        remarks: ''
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert(t('form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className={className} 
        style={style}
      >
        {children}
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
            <h2 className={styles.modalTitle}>{t('form.title')}</h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">{t('form.fullName')} <span className={styles.required}>*</span></label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  placeholder={t('form.placeholder')}
                  required 
                  className={styles.input}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobileNumber">{t('form.mobile')} <span className={styles.required}>*</span></label>
                <input 
                  type="tel" 
                  id="mobileNumber" 
                  name="mobileNumber"
                  placeholder={t('form.placeholder')}
                  required 
                  className={styles.input}
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="city">{t('form.city')} <span className={styles.required}>*</span></label>
                <input 
                  type="text" 
                  id="city" 
                  name="city"
                  placeholder={t('form.placeholder')}
                  required 
                  className={styles.input}
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="occupation">{t('form.occupation')} <span className={styles.required}>*</span></label>
                <input 
                  type="text" 
                  id="occupation" 
                  name="occupation"
                  placeholder={t('form.placeholder')}
                  required 
                  className={styles.input}
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="remarks">{t('form.remarks')}</label>
                <textarea 
                  id="remarks" 
                  name="remarks"
                  placeholder={t('form.placeholder')}
                  className={styles.textarea}
                  value={formData.remarks}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? t('form.submitting') : t('form.submit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
