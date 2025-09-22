import styles from './Impact.module.css';

// Reusable Icon component
const Icon = ({ path }: { path: string }) => (
  <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const Impact = () => {
  const youthIconPath = "M18 18.72a9.094 9.094 0 003.741-.479 1.988 1.988 0 00-1.529-3.742 9.094 9.094 0 00-3.741.479m-9.372 0a9.094 9.094 0 013.741-.479 1.988 1.988 0 01-1.529-3.742 9.094 9.094 0 01-3.741.479M15 9.75a3 3 0 11-6 0 3 3 0 016 0zm-3 8.25a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5z";
  const educationIconPath = "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25";
  const communityIconPath = "M18 18.72a9.094 9.094 0 003.741-.479 1.988 1.988 0 00-1.529-3.742 9.094 9.094 0 00-3.741.479m-9.372 0a9.094 9.094 0 013.741-.479 1.988 1.988 0 01-1.529-3.742 9.094 9.094 0 01-3.741.479M15.375 19.375a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM8.625 19.375a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM12 14.25a3.375 3.375 0 00-3.375 3.375c0 .923.375 1.766.974 2.368a.75.75 0 001.056-.254l.026-.046c.164-.287.352-.556.564-.813a3.375 3.375 0 014.53 0c.212.257.4.526.564.813l.026.046a.75.75 0 001.056.254c.6-.602.974-1.445.974-2.368a3.375 3.375 0 00-3.375-3.375H12z";

  return (
    <section id="impact" className={styles.impactSection}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>How Your Support Creates Opportunity</h2>
        </div>
        <div className={styles.bentoGrid}>
          {/* Tall Anchor Card: Youth Development */}
          <div className={`${styles.card} ${styles.mainCard}`}>
            <div className={styles.cardBgImage}></div>
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <Icon path={youthIconPath} />
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>Youth Development</h3>
                <p>We provide safe spaces and mentorship for young people through music, sports, and leadership training.</p>
              </div>
            </div>
          </div>

          {/* Supporting Card: Education & Literacy */}
          <div className={`${styles.card} ${styles.sideCard}`}>
            <div className={styles.cardContent}>
              <Icon path={educationIconPath} />
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>Education & Literacy</h3>
                <p>We help break down barriers to education and unlock a lifetime of potential.</p>
              </div>
            </div>
          </div>

          {/* Supporting Card: Community Welfare */}
          <div className={`${styles.card} ${styles.sideCard}`}>
            <div className={styles.cardContent}>
              <Icon path={communityIconPath} />
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>Community Welfare</h3>
                <p>We support initiatives that promote reconciliation and strengthen community bonds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;