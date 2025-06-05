"use client";
import React, { useState, useEffect } from 'react';

export default function Accessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // Percentage of original size
  const [contrast, setContrast] = useState('normal');

  // Apply saved preferences when component mounts
  useEffect(() => {
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    const savedContrast = localStorage.getItem('accessibility-contrast');
    
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedContrast) setContrast(savedContrast);
    
    applySettings(savedFontSize ? parseInt(savedFontSize) : 100, savedContrast || 'normal');
  }, []);

  const applySettings = (newFontSize, newContrast) => {
    // Apply font size
    document.documentElement.style.fontSize = `${newFontSize}%`;
    localStorage.setItem('accessibility-font-size', newFontSize);
    
    // Apply contrast
    if (newContrast === 'high') {
      document.documentElement.classList.add('high-contrast');
      document.documentElement.classList.remove('inverted');
    } else if (newContrast === 'inverted') {
      document.documentElement.classList.add('inverted');
      document.documentElement.classList.remove('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast', 'inverted');
    }
    localStorage.setItem('accessibility-contrast', newContrast);
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    applySettings(newSize, contrast);
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    applySettings(newSize, contrast);
  };

  const toggleContrast = () => {
    const newContrast = contrast === 'normal' ? 'high' : 
                        contrast === 'high' ? 'inverted' : 'normal';
    setContrast(newContrast);
    applySettings(fontSize, newContrast);
  };

  const resetSettings = () => {
    setFontSize(100);
    setContrast('normal');
    applySettings(100, 'normal');
  };

  return (
    <>
      {/* Accessibility button */}
      <button
        aria-label="Ustawienia dostępności"
        className="fixed bottom-4 left-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <div className="fixed bottom-16 left-4 z-50 bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-64">
          <h3 className="text-lg font-medium mb-3">Ustawienia dostępności</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2">Rozmiar tekstu</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  className="bg-gray-200 hover:bg-gray-300 rounded p-1"
                  aria-label="Zmniejsz rozmiar tekstu"
                >
                  A-
                </button>
                <span className="text-sm">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  className="bg-gray-200 hover:bg-gray-300 rounded p-1"
                  aria-label="Zwiększ rozmiar tekstu"
                >
                  A+
                </button>
              </div>
            </div>
            
            <div>
              <button
                onClick={toggleContrast}
                className="bg-gray-200 hover:bg-gray-300 rounded py-1 px-3 w-full text-left"
              >
                {contrast === 'normal' ? 'Wysoki kontrast' : 
                 contrast === 'high' ? 'Odwrócone kolory' : 'Normalny kontrast'}
              </button>
            </div>
            
            <button
              onClick={resetSettings}
              className="bg-gray-200 hover:bg-gray-300 rounded py-1 px-3 w-full text-left"
            >
              Resetuj ustawienia
            </button>
          </div>
        </div>
      )}
    </>
  );
}
