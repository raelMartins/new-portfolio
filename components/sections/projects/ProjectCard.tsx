import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import styles from 'styles/sections/projects/projectcard.module.scss';

const ProjectCard = ({ data }) => {
  return (
    <a href={data.url} className={styles.projectCard}>
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
      <h4>{data.name}</h4>
      <p>{data.description}</p>
      <ul className={styles.cardProjectTechList}>
        {data.technologies.map((tech) => (
          <li key={Math.random()}>{tech}</li>
        ))}
        {/* <li>Algolia</li>
        <li>WordPress</li>
        <li>PHP</li> */}
      </ul>
    </a>
  );
};

export default ProjectCard;
