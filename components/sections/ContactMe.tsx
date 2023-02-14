import styles from 'styles/sections/contactme.module.scss';

const ContactMe = () => {
  return (
    <section id='contact' className={styles.contactMeSection}>
      <h1>What’s Next?</h1>
      <h2>Get In Touch</h2>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        className='emailLink'
        href='mailto:olamideakeredolu@gmail.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        Say Hello
      </a>
    </section>
  );
};

export default ContactMe;
