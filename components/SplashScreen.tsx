import { useEffect } from 'react';

import styles from '../styles/splashscreen.module.scss';
import IconSVG from './IconSVG';

const SplashScreen = () => {
  useEffect(() => {
    const splash = document.getElementById('splashScreen');
    if (splash) {
      setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
          splash.style.display = 'none';
        }, 200);
      }, 4500);
    }
  }, []);

  return (
    <section className={styles.splashScreen} id='splashScreen'>
      <IconSVG />
    </section>
  );
};

export default SplashScreen;
