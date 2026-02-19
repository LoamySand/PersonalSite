import './App.css';
import React, { useState, useEffect, useRef } from "react";
import Main from './components/MainComponent';
import Bee from './components/BeeComponent';
import { HashRouter } from "react-router-dom";
import { ScrollContext } from './ScrollContext';

function App() {
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <HashRouter>
      <ScrollContext.Provider value={{ isScrolling }}>
        <div className="app-shell">
          <Bee secretLink="/#/secret" />
          <Main/>
        </div>
      </ScrollContext.Provider>
    </HashRouter>
  );
}

export default App;
