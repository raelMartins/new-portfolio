import Image from 'next/image';
import styles from 'styles/sections/aboutme.module.scss';

const AboutMe = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <h1>About Me</h1>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>
            Hey there! My name is Martins and I enjoy creating things that live
            on the internet. I wrote my first line of code way back in primary
            or elementary school with QBASIC. Then many many years later, in
            2016, i built my first Wordpress website and I was hooked. I&apos;d
            always loved tech and the concept of having an idea, and being able
            to convert it into an actual working thing by writing a few lines of
            code really blew my mind.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of building{' '}
            <a
              href='https://classytouchlaundry-web.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              a laundry service platform
            </a>
            ,{' '}
            <a href='https://betrelate.com' target='_blank' rel='noreferrer'>
              a social media platform
            </a>
            , and{' '}
            <a href='https://iberrands.com' target='_blank' rel='noreferrer'>
              a logistics delivery website
            </a>
            . My main focus these days is building a fun, engaging digital
            social media experience at{' '}
            <a href='https://betrelate.com' target='_blank' rel='noreferrer'>
              Betrelate
            </a>{' '}
          </p>
          <p>
            I have also recently been looking into getting started with{' '}
            <a
              href='https://medium.com/@olamideakeredolu'
              target='_blank'
              rel='noreferrer'
            >
              technical writing
            </a>{' '}
            on topics I am currently learning. More on that in the near future
            (hopefully :{')'} ).
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Vue</li>
            <li>Node.js</li>
            <li>React Native</li>
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
            {/* <Image
              src='/testing-brittanychiang.avif'
              alt='My Image'
              width={300}
              height={300}
            /> */}
            <Image
              src='/my-image.jpeg'
              alt='My Image'
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
