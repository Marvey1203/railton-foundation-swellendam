import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.foundationName}>The Railton Foundation</p>
        <div className={styles.contactInfo}>
          <a href="mailto:info@railtonfoundation.org">info@railtonfoundation.org</a>
        </div>
        <p className={styles.anbi}>
          Registered Public Benefit Organisation (ANBI)
        </p>
        <p className={styles.copyright}>© 2025 Railton Foundation Swellendam</p>
      </div>
    </footer>
  );
};

export default Footer;