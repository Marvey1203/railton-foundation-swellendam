import Image from 'next/image';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContent}>
        <div className={styles.imageWrapper}>
          <Image
            src="/foundation-work.jpg" // We need a new image of their work
            alt="One of the many community projects by the Railton Foundation"
            width={250} // Let's make the image a bit bigger
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.quoteWrapper}>
          <blockquote className={styles.quote}>
            “Out of many great organisations that seek to confront the town&apos;s social
            challenges, Railton Foundation Swellendam is particularly notable for the
            variety of their projects, for their open-nesss and inclusivity, and their
            unceasing commitment and dedication.”
          </blockquote>
          <cite className={styles.attribution}>— AMANDA SHACKLEY, SUPPORTER</cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;