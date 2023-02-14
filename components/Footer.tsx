import {
  FiCodepen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi';
import styles from 'styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <ul>
          <li>
            <a
              href='https://github.com/raelMartins'
              aria-label='GitHub'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/_raelmartins_/'
              aria-label='Instagram'
              target='_blank'
              rel='noreferrer'
            >
              <FiInstagram />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/_raelmartins'
              aria-label='Twitter'
              target='_blank'
              rel='noreferrer'
            >
              <FiTwitter />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/martins-akeredolu/'
              aria-label='Linkedin'
              target='_blank'
              rel='noreferrer'
            >
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/raelMartins'
              aria-label='Codepen'
              target='_blank'
              rel='noreferrer'
            >
              <FiCodepen />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <a
          href='https://github.com/raelMartins/new-portfolio'
          rel='noopener noreferrer'
          target='_blank'
        >
          <div>Designed &amp; Built by Brittany Chiang</div>
          <div className={styles.githubStats}>View Repository</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
