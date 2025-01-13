import { useState, useEffect } from 'react';
import styles from 'styles/sections/employmenthistory.module.scss';
import EmploymentDetails from './EmploymentDetails';

const EmploymentHistory = () => {
  const [tab, setTab] = useState('betrelate');
  const [index, setIndex] = useState(0);
  const [companies] = useState([
    'myxellia',
    'betrelate',
    'fireswitch-1',
    'classytouch',
    'solarworld',
    'fireswitch-2'
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
              onClick={() => changeTab('myxellia')}
            >
              Myxellia
            </span>
            <span
              style={index === 1 ? activeTab : {}}
              onClick={() => changeTab('betrelate')}
            >
              Betrelate
            </span>
            <span
              style={index === 2 ? activeTab : {}}
              onClick={() => changeTab('fireswitch-1')}
            >
              Fireswitch
            </span>
            <span
              style={index === 3 ? activeTab : {}}
              onClick={() => changeTab('classytouch')}
            >
              Classy Touch
            </span>
            <span
              style={index === 4 ? activeTab : {}}
              onClick={() => changeTab('solarworld')}
            >
              SolarWorld
            </span>
            <span
              style={index === 5 ? activeTab : {}}
              onClick={() => changeTab('fireswitch-2')}
            >
              Fireswitch
            </span>
            <div className={`${styles.indicator}`}></div>
          </div>
        </div>
        <div className={styles.theWhat}>
          <EmploymentDetails
            tasks={[
              'Developed in its entirety, the client facing website for a real state development company that has generated over ₦10 billion ($6m) in capital gains.',
              'Created a fully dynamic property store implementation allowing clients to select a theme for their store website and customize it to their preferred appearance.',
              'Developed a platform that allows real estate property developers easily handle their properties, track their statistics, and handle their payments.',
              `Was tasked with handling the company's official site as well as its blog and support centre.`
            ]}
            title='Frontend Engineer'
            company='Myxellia'
            timePeriod='January 2024 - Present'
            url='https://myxellia.io'
          />
          <EmploymentDetails
            tasks={[
              'Developed a social media startup now used by over 5,000 users, allowing users to post text, images and other media which other users can comment, like, and interact with, live chat with other platform users, create their own groups and communities to discuss similar ideas.',
              "Developed an Administrator site, where admins of the platform could keep track of the over 5,000 active users on the platform, ban accounts, verify accounts, moderate the content on the platform and monitor the platform's growth metrics.",
              'Developed a simple weekly game for users interested in football/soccer allowing them to predict possible outcomes of 10 games being played, share the predictions with friends, and see how well their predictions turn out against other users via the leaderboard.'
            ]}
            title='Frontend Engineer'
            company='Betrelate'
            timePeriod='December 2021 - April 2024'
            url='https://betrelate.com'
          />

          <EmploymentDetails
            tasks={[
              'Redesigned the frontend of the IBErrands webapp and integrated a chat feature into the app.',
              'Ensured responsive web design on the Reni Store web frontend.',
              'Mentored 4 web development interns, guiding them in their web development journey.'
            ]}
            title='Web Developer'
            company='Fireswitch-1'
            timePeriod='September - December 2021'
            url='https://fireswitch.tech/'
          />
          <EmploymentDetails
            tasks={[
              'Sped up customer onboarding by including a Sign In With Google option that allows new users to create accounts with 1 Tap.',
              "Revolutionized the customer notification system using the Mailgun and Twilio API's, which an admin accomplishes with 1 click.",
              'Provided an easy online payment platform for users to pay using the PayStack API, simultaneously providing the CEO with valuable company growth metrics.'
            ]}
            title='Web Developer (Contract)'
            company='ClassyTouch'
            timePeriod='November 2019 - Present'
            url='https://classytouchlaundry-web.vercel.app/'
          />
          <EmploymentDetails
            tasks={[
              'Collaborated with the senior web developer to create the primary website',
              'Served as an intermediary between the senior developer and the client'
            ]}
            title='Wordpress Developer'
            company='Solarworld'
            timePeriod='September - December 2020'
            url='https://solarworldnigeria.org/'
          />
          <EmploymentDetails
            tasks={[
              'Created a simple application for tracking the salaries of employees at the firm.',
              'Significantly improved quality of work of senior developers by taking over 2 or 3 less heavy duty tasks they were to complete freeing them up to tackle more important tasks.',
              'Participated in group meetings & team building exercises.'
            ]}
            title='Web Development Intern'
            company='Fireswitch-2'
            timePeriod='June 2019 - March 2020'
            url='https://fireswitch.tech/'
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentHistory;
