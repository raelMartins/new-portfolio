import ProjectCard from 'components/sections/projects/ProjectCard';
import styles from 'styles/sections/projects/moreprojects.module.scss';

const MoreProjects = ({ projects }) => {
  return (
    <section className={styles.moreProjects}>
      <div className={styles.header}>
        <h2>Other Noteworthy Projects</h2>
        <a>view the archive</a>
      </div>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard data={project} />
          </li>
        ))}
        {/* <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li>
        <li>
          <ProjectCard />
        </li> */}
      </ul>
      <div className={styles.showMoreButton}>
        <button>Show More</button>
      </div>
    </section>
  );
};

export default MoreProjects;
