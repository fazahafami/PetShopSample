import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // style
    const buttonStyle = {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#da828f',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        padding: '12px 16px',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: 1000,
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        animation: 'pulse 2s infinite',
      };
    
      const pulseKeyframes = `
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `;
  
      return (
        <>
          {/* Injecting keyframes inside style tag */}
          <style>{pulseKeyframes}</style>
    
          {showButton && (
            <button onClick={scrollToTop} style={buttonStyle}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          )}
        </>
      );
    }
    
  
  export default ScrollToTopButton;