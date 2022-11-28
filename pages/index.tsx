import Navbar from 'components/Navbar';
import WelcomeSection from 'components/WelcomeSection';
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
          <WelcomeSection />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
