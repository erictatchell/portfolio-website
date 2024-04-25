import React, { useEffect } from 'react';

const AnimatedHiThere = () => {
  useEffect(() => {
    const container = document.querySelector('.animated-hi-there-container');
    const text = document.querySelector('.animated-hi-there-text');

    if (container && text) {
      const duration = 3000; // Animation duration in milliseconds
      const delay = 100; // Delay between each letter animation

      text.textContent = ''; // Clear initial text

      const message = 'Hi there';
      const letters = message.split('');

      // Function to animate each letter
      const animateLetters = (index: number) => {
        setTimeout(() => {
          if (text) {
            text.textContent += letters[index]; // Append next letter
            if (index < letters.length - 1) {
              animateLetters(index + 1); // Recursively animate next letter
            }
          }
        }, delay);
      };

      animateLetters(0); // Start animating letters
    }
  }, []);

  return (
    <div className="animated-hi-there-container">
      <span className="animated-hi-there-text"></span>
    </div>
  );
};

export default AnimatedHiThere;
