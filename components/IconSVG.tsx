import styles from '../styles/iconsvg.module.scss';

const IconSVG = () => {
  return (
    <svg height='111' width='97.6' className={styles.myLogo}>
      <polygon
        id='myHex'
        className={styles.myHex}
        points='48.3,5 5,30 5,80 48.3,105 91.6,80 91.6,30 48.3,5'
        strokeLinejoin='round'
        strokeLinecap='round'
      />
      <polyline
        className={styles.myEm}
        points='37,72 37,42 39,42 47,57 48,57 49,57 57,42 59,42 59,72'
        // points='37,72 37,42 48,57 59,42 59,72'
        // strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconSVG;
