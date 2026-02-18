import React, { useState, useEffect, useRef } from 'react';
import './bee.css';
const beeImage = process.env.PUBLIC_URL + '/bee.png';

const BeeComponent = ({ secretLink = '/' }) => {
  const [beePosition, setBeePosition] = useState({ x: 20, y: 0 });
  const [beeRotation, setBeeRotation] = useState(0);
  const [trail, setTrail] = useState([]);
  const [isScrolling, setIsScrolling] = useState(true);
  const [beeOpacity, setBeeOpacity] = useState(1);
  const scrollTimeoutRef = useRef(null);
  const trailRef = useRef([]);
  
  const TRAIL_FADE_TIME = 5000; // Trail disappears after 5 seconds (in milliseconds)
  const SCROLL_IDLE_TIME = 3000; // Time before bee starts fading (in milliseconds)
  const BEE_FADE_TIME = 2000; // Time for bee to fade out (in milliseconds)

  // Keep trail ref in sync with state
  useEffect(() => {
    trailRef.current = trail;
  }, [trail]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setBeeOpacity(1);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set new timeout for fade effect
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_IDLE_TIME);
      
      const scrollY = window.scrollY;
      
      // Serpentine motion: use sine wave for X position, scroll for Y
      const waveAmplitude = 80; // How far left/right the bee travels
      const waveFrequency = 0.004; // How tight/loose the wave is
      const scrollScale = 0.3; // Slow down the bee (0.3 = moves at 30% of scroll speed)
      
      const xPosition = 300 + Math.sin(scrollY * waveFrequency) * waveAmplitude;
      const yPosition = scrollY * scrollScale;
      
      const newPosition = { x: xPosition, y: yPosition };
      setBeePosition(newPosition);
      
      // Calculate the bee's direction facing away from the last trail point
      let angle = 0;
      if (trailRef.current.length > 0) {
        const lastTrailPoint = trailRef.current[trailRef.current.length - 1];
        const dx = newPosition.x - lastTrailPoint.x;
        const dy = newPosition.y - lastTrailPoint.y;
        const distance = Math.hypot(dx, dy);
        
        // Only update angle if there's meaningful distance (to avoid jitter when stationary)
        if (distance > 0) {
          angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // Add 180 to flip direction
        }
      }
      setBeeRotation(angle);

      // Add to trail every 10px to avoid too many points
      setTrail(prevTrail => {
        const lastPoint = prevTrail[prevTrail.length - 1];
        if (!lastPoint || Math.hypot(newPosition.x - lastPoint.x, newPosition.y - lastPoint.y) > 10) {
          const newTrail = [...prevTrail, { ...newPosition, timestamp: Date.now() }];
          return newTrail;
        }
        return prevTrail;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prevTrail => {
        const now = Date.now();
        return prevTrail.filter(point => now - point.timestamp < TRAIL_FADE_TIME);
      });
    }, 20); // Check every 100ms

    return () => clearInterval(interval);
  }, []);

  // Handle bee fade effect when not scrolling
  useEffect(() => {
    if (!isScrolling) {
      const fadeStartTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - fadeStartTime;
        const newOpacity = Math.max(0, 1 - (elapsed / BEE_FADE_TIME));
        setBeeOpacity(newOpacity);
        
        if (newOpacity <= 0) {
          clearInterval(interval);
        }
      }, 50); // Update every 50ms
      
      return () => clearInterval(interval);
    }
  }, [isScrolling]);

  const handleBeeClick = () => {
    // Navigate to link when bee is clicked
    window.location.href = secretLink;
  };

  return (
    <>
      <svg className="trail-svg">
        {trail.length > 1 && (
          <>
            {trail.map((point, index) => {
              if (index === 0) return null;
              const prevPoint = trail[index - 1];
              const now = Date.now();
              const age = now - point.timestamp;
              const opacity = Math.max(0, 1 - age / TRAIL_FADE_TIME);
              
              return (
                <line
                  key={index}
                  x1={prevPoint.x + 16}
                  y1={prevPoint.y + 16}
                  x2={point.x + 16}
                  y2={point.y + 16}
                  className="trail-line"
                  style={{ opacity }}
                />
              );
            })}
          </>
        )}
      </svg>
      <div
        className="bee-container"
        style={{
          transform: `translate(${beePosition.x}px, ${beePosition.y}px) rotate(${beeRotation}deg)`,
          opacity: beeOpacity
        }}
        // onClick={handleBeeClick}
        // title="Click me for a secret!"
      >
        <img src={beeImage} alt="bee" className="bee-icon" />
      </div>
    </>
  );
};

export default BeeComponent;
