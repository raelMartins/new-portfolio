import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from 'styles/sections/projects.module.scss';
import MoreProjects from './projects/MoreProjects';

const Projects = () => {
  return (
    <section className={styles.projectsSection} id='projects'>
      <h1>Some Things I’ve Built</h1>
      <ul className={styles.projectList}>
        <li className={styles.listItem}>
          <div className={styles.projectImage}>
            <div className={styles.imageContainer}>
              <Image
                src={'/placeholders/halcyon.avif'}
                alt='Image 1'
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className={styles.projectDescription}>
            <p className={styles.caption}>Featured Project</p>
            <h3 className={styles.projectTitle}>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                Halcyon Theme
              </a>
            </h3>
            <div className={styles.description}>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  Visual Studio Marketplace
                </a>
                ,{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  Package Control
                </a>
                ,{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  Atom Package Manager
                </a>
                , and{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  npm
                </a>
                .
              </p>
            </div>
            <ul className={styles.projectTechList}>
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
              <li>iTerm2</li>
              <li>Hyper</li>
            </ul>
            <div className={styles.links}>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                <FiGithub />
              </a>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                <FiExternalLink />
              </a>
            </div>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.projectImage}>
            <div className={styles.imageContainer}>
              <Image
                src={'/placeholders/demo.avif'}
                alt='Image 1'
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className={styles.projectDescription}>
            <p className={styles.caption}>Featured Project</p>
            <h3 className={styles.projectTitle}>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                Halcyon Theme
              </a>
            </h3>
            <div className={styles.description}>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  Visual Studio Marketplace
                </a>
                ,{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  Package Control
                </a>
                ,{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  Atom Package Manager
                </a>
                , and{' '}
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  npm
                </a>
                .
              </p>
            </div>
            <ul className={styles.projectTechList}>
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
              <li>iTerm2</li>
              <li>Hyper</li>
            </ul>
            <div className={styles.links}>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                <FiGithub />
              </a>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                <FiExternalLink />
              </a>
            </div>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.projectImage}>
            <div className={styles.imageContainer}>
              <Image
                src={'/placeholders/course-card.avif'}
                alt='Image 1'
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className={styles.projectDescription}>
            <p className={styles.caption}>Featured Project</p>
            <h3 className={styles.projectTitle}>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                Build a Spotify Connected App{' '}
              </a>
            </h3>
            <div className={styles.description}>
              <p>
                Having struggled with understanding how the Spotify OAuth flow
                works, I made the course I wish I could have had.
              </p>
              <p>
                Unlike tutorials that only cover a few concepts and leave you
                with half-baked GitHub repositories, this course covers
                everything from explaining the principles of REST APIs to
                implementing Spotify&apos;s OAuth flow and fetching API data in
                a React app. By the end of the course, you’ll have an app
                deployed to the internet you can add to your portfolio.
              </p>
            </div>
            <ul className={styles.projectTechList}>
              <li>React</li>
              <li>Express</li>
              <li>Spotify API</li>
              <li>Styled Components</li>
            </ul>
            <div className={styles.links}>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                <FiGithub />
              </a>
              <a href='#' rel='noopener noreferrer' target='_blank'>
                <FiExternalLink />
              </a>
            </div>
          </div>
        </li>
      </ul>
      <MoreProjects />
    </section>
  );
};

export default Projects;
