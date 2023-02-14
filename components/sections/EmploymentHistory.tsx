import { useState, useEffect } from 'react';
import styles from 'styles/sections/employmenthistory.module.scss';
import EmploymentDetails from './EmploymentDetails';

const EmploymentHistory = () => {
  const [tab, setTab] = useState('upstatement');
  const [index, setIndex] = useState(0);
  const [companies] = useState([
    'upstatement',
    'scout-1',
    'apple',
    'scout-2',
    'starry',
    'mullenlowe'
  ]);

  const changeTab = (selected: string) => {
    setTab(selected);
    const ind = companies.indexOf(selected);
    document.documentElement.setAttribute('style', `--tab-number: ${ind}`);
    const oldsection = document.getElementById(`${tab}-tasks`);
    const newsection = document.getElementById(`${selected}-tasks`);

    console.log(oldsection, newsection);

    if (tab === selected) {
      return;
    }

    oldsection ? (oldsection.style.opacity = '0') : null;
    setTimeout(() => {
      oldsection ? (oldsection.style.display = `none`) : null;
      newsection ? (newsection.style.display = `block`) : null;
      setTimeout(() => {
        newsection ? (newsection.style.opacity = '1') : null;
      }, 10);
    }, 150);

    setIndex(ind);
  };
  useEffect(() => {
    const section = document.getElementById(`${tab}-tasks`);
    section ? (section.style.display = `block`) : null;
    setTimeout(() => {
      section ? (section.style.opacity = '1') : null;
    }, 10);
  }, []);

  const activeTab = {
    color: `var(--green)`,
    backgroundColor: `var(--light-navy)}`
  };

  return (
    <section id='jobs' className={styles.employmentHistorySection}>
      <h1>Where I’ve Worked</h1>
      <div className={styles.innerContent}>
        <div className={styles.theWhere}>
          <div className={styles.employmentList}>
            <span
              style={index === 0 ? activeTab : {}}
              onClick={() => changeTab('upstatement')}
            >
              Upstatement
            </span>
            <span
              style={index === 1 ? activeTab : {}}
              onClick={() => changeTab('scout-1')}
            >
              Scout
            </span>
            <span
              style={index === 2 ? activeTab : {}}
              onClick={() => changeTab('apple')}
            >
              Apple
            </span>
            <span
              style={index === 3 ? activeTab : {}}
              onClick={() => changeTab('scout-2')}
            >
              Scout
            </span>
            <span
              style={index === 4 ? activeTab : {}}
              onClick={() => changeTab('starry')}
            >
              Starry
            </span>
            <span
              style={index === 5 ? activeTab : {}}
              onClick={() => changeTab('mullenlowe')}
            >
              MullenLowe
            </span>
            <div className={`${styles.indicator}`}></div>
          </div>
        </div>
        <div className={styles.theWhat}>
          <EmploymentDetails
            tasks={[
              'Write modern, performant, maintainable code for a diverse array of client and internal projects',
              'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
              'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
            ]}
            title='Engineer'
            company='Upstatement'
            timePeriod='May 2018 - Present'
            url='https://www.google.com'
          />
          <EmploymentDetails
            tasks={[
              'Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern',
              'Helped solidify a brand direction for blistabloc that spans both packaging and web',
              'Interfaced with clients on a weekly basis, providing technological expertise'
            ]}
            title='Studio Developer'
            company='Scout-1'
            timePeriod='January - April 2018'
            url='https://www.google.com'
          />
          <EmploymentDetails
            tasks={[
              'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
              'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
              "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
              'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
            ]}
            title='UI Engineer Co-op'
            company='Apple'
            timePeriod='July - December 2017'
            url='https://www.google.com'
          />
          <EmploymentDetails
            tasks={[
              'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
              'Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript'
            ]}
            title='Studio Developer'
            company='Scout-2'
            timePeriod='January - June 2017'
            url='https://www.google.com'
          />
          <EmploymentDetails
            tasks={[
              "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
              'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station',
              'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps'
            ]}
            title='Software Engineer Co-op'
            company='Starry'
            timePeriod='July - December 2016'
            url='https://www.google.com'
          />
          <EmploymentDetails
            tasks={[
              'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
              'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
              'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
            ]}
            title='Creative Technologist Co-op'
            company='MullenLowe'
            timePeriod='July - December 2015'
            url='https://www.google.com'
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentHistory;
