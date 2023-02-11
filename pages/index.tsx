import FixedEmailLink from 'components/FIxedEmailLink';
import FixedSocialLinks from 'components/FIxedSocialLinks';
import Navbar from 'components/Navbar';
import AboutMe from 'components/sections/AboutMe';
import WelcomeSection from 'components/sections/WelcomeSection';
import Head from 'next/head';
import Image from 'next/image';
import SplashScreen from '../components/SplashScreen';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martins&apos; Website</title>
        <meta
          name='description'
          content="Olamide Akeredolu-Martins' personal website. Enjoy!"
        />
        <link rel='icon' href='/mybitmoji.png' />
      </Head>

      <main className={styles.main}>
        <SplashScreen />
        <Navbar />
        <div className={styles.mainContent}>
          <FixedEmailLink />
          <FixedSocialLinks />
          <WelcomeSection />
          <AboutMe />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
