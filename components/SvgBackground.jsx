import React from 'react';
import styles from './SvgBackground.module.css';

const SvgBackground = ({ children }) => {
  return (
    <div className={styles.container}>
      <svg className={styles.backgroundSvg} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.2" />
          </pattern>
          <pattern id="diagonal" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0,100 L 100,0" fill="none" stroke="#000000" strokeWidth="0.6" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SvgBackground;
