import React, { useState, useEffect } from 'react';
import './Footer.css';
import Icons from './Icons';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // Clean up the interval
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="clock">{time.toLocaleTimeString()} IST</span>
        <span className="copyright">© 2024 KARAN RATHOD. All rights reserved.</span>
        <Icons className="icons" />
      </div>
    </footer>
  );
};

export default Footer;
