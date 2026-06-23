"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const languageOptions = [
  { code: 'hi', label: 'हिंदी' },
  { code: 'en', label: 'English' },
  { code: 'hin', label: 'Hinglish' },
  { code: 'bho', label: 'भोजपुरी' },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLang = languageOptions.find(opt => opt.code === language);

  return (
    <div className="language-switcher" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block', zIndex: 50 }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.2s',
          fontFamily: 'inherit'
        }}
      >
        <Globe size={16} />
        {selectedLang?.label}
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '8px',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          minWidth: '120px'
        }}>
          {languageOptions.map(opt => (
            <button
              key={opt.code}
              onClick={() => {
                setLanguage(opt.code);
                setIsOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '10px 16px',
                background: language === opt.code ? '#f0f0f0' : 'white',
                border: 'none',
                color: '#333',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                fontWeight: language === opt.code ? 'bold' : 'normal',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'}
              onMouseOut={(e) => e.currentTarget.style.background = language === opt.code ? '#f0f0f0' : 'white'}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
