import Link from 'next/link';
import styles from '../../styles/sections/welcomesection.module.scss';

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <h3>Hi, my name is</h3>
      <h1>Martins Akeredolu.</h1>
      <h2>I build things for the web.</h2>
      <p>
        I&apos;m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I&apos;m focused
        on building up an easy to use social media platform at{' '}
        <a href='https://betrelate.com'>Betrelate</a>.
      </p>
      <Link className={styles.viewMyProjects} href='/#projects'>
        Check out my projects!
      </Link>
    </section>
  );
};

export default WelcomeSection;
