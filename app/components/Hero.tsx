import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>Hope in Action. Future in Bloom.</h1>
        <p className={styles.subheadline}>
          We partner with the people of Railton, Swellendam to create lasting change
          through community-led development in education, youth empowerment, and social welfare.
        </p>
        <div className={styles.ctaContainer}>
          <Link href="#donate" className="btn btn-primary">
            Give Hope Today
          </Link>
          <Link href="#volunteer" className="btn btn-secondary">
            Share Your Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;