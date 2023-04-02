import FixedEmailLink from 'components/FIxedEmailLink';
import FixedSocialLinks from 'components/FIxedSocialLinks';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import AboutMe from 'components/sections/AboutMe';
import ContactMe from 'components/sections/ContactMe';
import EmploymentHistory from 'components/sections/EmploymentHistory';
import Projects from 'components/sections/Projects';
import WelcomeSection from 'components/sections/WelcomeSection';
import Head from 'next/head';
import Image from 'next/image';
import SplashScreen from '../components/SplashScreen';
import styles from '../styles/home.module.scss';
import { useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
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

      {showSplash ? (
        <SplashScreen
          removeSplash={() => {
            setShowSplash(false);
          }}
        />
      ) : (
        <>
          <main className={styles.main}>
            <Navbar />
            <div className={styles.mainContent}>
              <FixedEmailLink />
              <FixedSocialLinks />
              <WelcomeSection />
              <AboutMe />
              <EmploymentHistory />
              <Projects />
              <ContactMe />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
