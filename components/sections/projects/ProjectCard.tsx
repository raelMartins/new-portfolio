import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import styles from 'styles/sections/projects/projectcard.module.scss';

const ProjectCard = () => {
  return (
    <a href='#' className={styles.projectCard}>
      <div className={styles.top}>
        <div className={styles.left}>
          <a>
            <FiFolder strokeWidth={1} />
          </a>
        </div>
        <div className={styles.right}>
          <a>
            <FiGithub />
          </a>
          <a>
            <FiExternalLink />
          </a>
        </div>
      </div>
      <h4>Integrating Algolia Search with WordPress Multisite</h4>
      <p>
        Building a custom multisite compatible WordPress plugin to build global
        search with Algolia
      </p>
      <ul className={styles.cardProjectTechList}>
        <li>Algolia</li>
        <li>WordPress</li>
        <li>PHP</li>
      </ul>
    </a>
  );
};

export default ProjectCard;
