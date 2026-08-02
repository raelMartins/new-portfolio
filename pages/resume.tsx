import Head from 'next/head';
import Link from 'next/link';
import { resumeData } from 'src/data/resumeData';
import styles from 'styles/resume.module.scss';

const ensureHref = (value: string, protocol: 'https' | 'mailto' | 'tel') => {
  if (value.startsWith('http') || value.startsWith('mailto:') || value.startsWith('tel:')) {
    return value;
  }
  if (protocol === 'mailto') return `mailto:${value}`;
  if (protocol === 'tel') return `tel:${value}`;
  return `https://${value}`;
};

export default function ResumePage() {
  const { name, title, contact, summary, experience, projects, skills, education, languages } =
    resumeData;

  const contactLinks = [
    { label: contact.email, href: ensureHref(contact.email, 'mailto'), external: false },
    { label: contact.phone, href: ensureHref(contact.phone, 'tel'), external: false },
    { label: contact.website, href: ensureHref(contact.website, 'https'), external: true },
    { label: contact.linkedin, href: ensureHref(contact.linkedin, 'https'), external: true },
    { label: contact.github, href: ensureHref(contact.github, 'https'), external: true }
  ];

  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>{`${name} - Resume`}</title>
        <meta name='description' content={`${name} - ${title}. ${summary}`} />
        <link rel='icon' href='/mybitmoji.png' />
      </Head>

      <div className={styles.toolbar}>
        <Link href='/' className={styles.backLink}>
          ← Back to portfolio
        </Link>
        <button
          type='button'
          className={styles.downloadButton}
          onClick={handleDownloadPdf}
        >
          Download PDF
        </button>
      </div>

      <main className={styles.document}>
        <header className={styles.header}>
          <h1>{name}</h1>
          <p className={styles.title}>{title}</p>
          <ul className={styles.contactList}>
            {contactLinks.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </a>
                {index < contactLinks.length - 1 && (
                  <span className={styles.separator} aria-hidden='true'>
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </header>

        <section className={styles.section} aria-labelledby='summary-heading'>
          <h2 id='summary-heading'>Summary</h2>
          <p className={styles.summary}>{summary}</p>
        </section>

        <section className={styles.section} aria-labelledby='experience-heading'>
          <h2 id='experience-heading'>Work Experience</h2>
          {experience.map((job) => (
            <article key={`${job.company}-${job.title}`} className={styles.experienceItem}>
              <div className={styles.itemHeader}>
                <h3>
                  {job.title} <span className={styles.company}>@ {job.company}</span>
                </h3>
                <p className={styles.meta}>
                  {job.startDate} – {job.endDate} | {job.location}
                </p>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.section} aria-labelledby='projects-heading'>
          <h2 id='projects-heading'>Additional Projects</h2>
          {projects.map((project) => (
            <article key={project.name} className={styles.projectItem}>
              <h3>
                <a href={project.url} target='_blank' rel='noopener noreferrer'>
                  {project.name}
                </a>
                <span className={styles.role}> | {project.role}</span>
              </h3>
              <p>{project.description}</p>
              <a
                className={styles.url}
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.url.replace(/^https?:\/\//, '')}
              </a>
            </article>
          ))}
        </section>

        <section className={styles.section} aria-labelledby='skills-heading'>
          <h2 id='skills-heading'>Skills</h2>
          {skills.map((group) => (
            <div key={group.category} className={styles.skillsGroup}>
              <span className={styles.category}>{group.category}</span>
              <ul className={styles.skillPills}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skillPill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section
          className={`${styles.section} ${styles.educationLanguages}`}
          aria-labelledby='education-languages-heading'
        >
          <h2 id='education-languages-heading'>Education & Languages</h2>
          <div className={styles.educationLanguagesGrid}>
            {education.map((entry) => (
              <article key={entry.institution} className={styles.educationItem}>
                <h3>{entry.degree}</h3>
                <p>
                  {entry.institution} | {entry.startDate} – {entry.endDate}
                </p>
              </article>
            ))}
            <div className={styles.languagesBlock}>
              {languages.map((entry) => (
                <p key={entry.language}>
                  <strong>{entry.language}:</strong> {entry.proficiency}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
