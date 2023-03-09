import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>SpaceX Launches</h1>
      <nav>
        <Link className="link" href="/">
          Show all
        </Link>
        <Link className="link" href="/bookmarks">
          Bookmarks
        </Link>
      </nav>
    </header>
  );
};

export default Header;
