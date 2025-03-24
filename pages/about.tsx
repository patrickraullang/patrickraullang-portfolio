import styles from '@/styles/AboutPage.module.css';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profilePicContainer}>
            <Image
              src="/logos/profilepic.jpeg"
              alt="Profile picture"
              width={200}
              height={200}
              className={styles.profilePic}
            />
          </div>
        <h1 className={styles.title}>Patrick Raul Lang</h1>
        <div className={styles.subtitle}>Computer Science and Media Master Student</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey I&apos;m Patrick Raul Lang, a Computer Science and Media Master student from Germany. I primarily work in the TypeScript, JavaScript, and React ecosystem, but I love exploring new technologies like Flutter and 
              diving into app development with Kotlin. Although my main focus is frontend development, I also have experience in backend development through my personal and university projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
            I am currently a working student at <span className={styles.highlight}>Mercedes Benz Tech Innovations</span> as
            where I work in the Artificial Intelligence team. I manage two large-scale AI projects, create quick code solutions primarily with React, and address UX questions related to our projects. 
            I also present and educate fellow employees and developers on our AI solutions and how to implement them using our interface or API solutions. 
            Previously, I worked for an E-Commerce agency focused on building online shops with Shopware. There, I was mainly responsible for redesigning and building the company’s website, 
            handling marketing tasks on social media, and managing automation and communication with HubSpot and Zapier.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Design & Digital Art:</h2>
            <p className={styles.paragraph}>
            Thanks to my extensive work in frontend development, I also enjoy designing. I create not only UI/UX designs but also digital art and videos using Adobe Premiere, 
            Photoshop, and Illustrator. I have been editing videos and producing digital art for over 10 years.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
            In my free time, I love playing video games, volleyball, tennis, and football. I also enjoy creative pursuits like photography, 
            videography, and designing. Additionally, I am part of a group of friends where we constantly brainstorm and bring new ideas to life.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
