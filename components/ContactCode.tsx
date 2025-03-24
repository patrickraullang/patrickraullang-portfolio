import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'lang.patrickraul@gmail.com',
    href: 'mailto:lang.patrickraul@gmail.com',
  },
  {
    social: 'github',
    link: 'patrickraullang',
    href: 'https://github.com/patrickraullang',
  },
  {
    social: 'linkedin',
    link: 'patrickraullang',
    href: 'https://www.linkedin.com/in/patrickraullang/',
  },
  {
    social: 'discord',
    link: 'patrickrl',
    href: 'https://discordapp.com/users/169097914398932992',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
