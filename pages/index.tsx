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
import fs from 'fs';

type Project = {
  id: number;
  url: string;
  name: string;
  github: string;
  description: string;
  technologies: [string];
  image: string;
};

export default function Home({ projects }: { projects: Project[] }) {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Martins Akeredolu - Portfolio</title>
        <meta
          name='description'
          content='Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!'
        />
        <link rel='icon' href='/mybitmoji.png' />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content='Martins Akeredolu - Portfolio' />
        <meta property='og:type' content='article' />
        <meta
          property='og:description'
          content='Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!'
        />
        <meta property='og:image' content='/mybitmoji.png' />
        <meta property='og:site_name' content='Martins Akeredolu - Portfolio' />

        {/* Twitter  */}
        <meta name='twitter:title' content='Martins Akeredolu - Portfolio' />
        <meta
          name='twitter:description'
          content='Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!'
        />
        <meta name='twitter:image' content='/mybitmoji.png' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@_raelmartins' />
        <meta
          name='twitter:image:alt'
          content='Hey there, welcome to my personal website,Check out some of my projects, or contact me if you have any questions for me!'
        />
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
              <Projects projects={projects} />
              <ContactMe />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fs.promises.readFile(
    `./project-data/all-projects.json`,
    'utf-8'
  );
  const projects = JSON.parse(res);
  return { props: { projects } };
};
