import { useEffect } from 'react';
import { Triangle, Oval } from 'react-loader-spinner';

import styles from '../styles/splashscreen.module.scss';

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
      <div className={styles.icon}>
        <svg
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          width='8rem'
          height='8rem'
          viewBox='0 0 485.688 485.688'
          // style='enable-background:new 0 0 485.688 485.688;'
          xmlSpace='preserve'
        >
          <g>
            <g>
              <path
                className={styles.logoLine}
                d='M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z'
              />
            </g>
          </g>
        </svg>
        <h1>M</h1>
      </div>
    </section>
  );
};

export default SplashScreen;
