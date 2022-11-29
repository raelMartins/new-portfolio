import Link from 'next/link';
import styles from '../styles/navbar.module.scss';
import IconSVG from './IconSVG';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <div className={styles.icon}>
            <svg
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              width='40px'
              height='40px'
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
            <Link href='/resume/resume-olamide-akeredolu-martins.pdf'>
              <h1>M</h1>
            </Link>
          </div>
        </div>
        <div className={styles.navigation}>
          <nav>
            <Link href='/#about'>
              {/* <a> */}
              <span>01.</span>About
              {/* </a> */}
            </Link>
            <Link href='/#jobs'>
              {/* <a> */}
              <span>02.</span>Experience
              {/* </a> */}
            </Link>
            <Link href='/#projects'>
              {/* <a> */}
              <span>03.</span>Work
              {/* </a> */}
            </Link>
            <Link href='/#contact'>
              {/* <a> */}
              <span>04.</span>Contact
              {/* </a> */}
            </Link>
            <Link
              href='/resume/resume-olamide-akeredolu-martins.pdf'
              target='_blank'
              rel='noreferrer'
              className={styles.resumeButton}
            >
              Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
