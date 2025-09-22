import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/components/Header.module.css'; // We'll create this CSS module next

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          {/* Remember to add your logo to the /public folder */}
          <Image
            src="/logo.png" // The logo you provided
            alt="Railton Foundation Logo"
            width={50}
            height={50}
            priority // Load this image first
          />
          <span>Railton Foundation</span>
        </Link>
        <nav>
          <Link href="#donate" className="btn btn-primary">
            Give Hope Today
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;