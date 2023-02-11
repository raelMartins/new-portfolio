import Image from 'next/image';
import styles from '../../styles/sections/aboutme.module.scss';

const AboutMe = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <h1>About Me</h1>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at{' '}
            <a
              href='https://personalsite-raelmartins.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              an advertising agency
            </a>
            ,{' '}
            <a
              href='https://personalsite-raelmartins.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              a start-up
            </a>
            ,{' '}
            <a
              href='https://personalsite-raelmartins.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              a huge corporation
            </a>
            , and{' '}
            <a
              href='https://personalsite-raelmartins.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              a student-led design studio
            </a>
            . My main focus these days is building accessible, inclusive
            products and digital experiences at{' '}
            <a
              href='https://personalsite-raelmartins.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              Upstatement
            </a>{' '}
            for a variety of clients.
          </p>
          <p>
            I also recently{' '}
            <a
              href='https://personalsite-raelmartins.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              launched a course
            </a>{' '}
            that covers everything you need to build a web app with the Spotify
            API using Node & React.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            {/* <Image
              src='/mybitmoji.png'
              alt='My Image'
              width={300}
              height={300}
            /> */}
            <Image
              src='/testing-brittanychiang.avif'
              alt='My Image'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
