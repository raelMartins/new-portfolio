import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from 'styles/sections/projects.module.scss';
import MoreProjects from './projects/MoreProjects';

type Project = {
  id: number;
  url: string;
  name: string;
  github: string;
  description: string;
  technologies: [string];
  image: string;
};

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className={styles.projectsSection} id='projects'>
      <h1>Some Things I’ve Built</h1>
      <ul className={styles.projectList}>
        {projects.slice(0, 3).map((project) => (
          <li className={styles.listItem} key={project.id}>
            <div className={styles.projectImage}>
              <div className={styles.imageContainer}>
                <Image
                  src={`/images/${project.image}.PNG`}
                  alt={project.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className={styles.projectDescription}>
              <p className={styles.caption}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='#' rel='noopener noreferrer' target='_blank'>
                  {project.name}
                </a>
              </h3>
              <div className={styles.description}>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
              </div>
              <ul className={styles.projectTechList}>
                {project.technologies.map((tech) => (
                  <li key={Math.random()}>{tech}</li>
                ))}
              </ul>
              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <FiGithub />
                  </a>
                )}
                <a href={project.url} rel='noopener noreferrer' target='_blank'>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <MoreProjects projects={projects.slice(3)} />
    </section>
  );
};

export default Projects;
