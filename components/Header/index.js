import styles from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ counter }) => {
  const router = useRouter();
  console.log(router);
  return (
    <header className={styles.header}>
      <h1>SpaceX Launches</h1>
      <nav>
        <Link
          className={
            router.route === "/"
              ? `${styles["header-link_active"]} ${styles["header-link"]}`
              : styles["header-link"]
          }
          href="/"
        >
          Show all
        </Link>
        <Link
          className={
            router.route === "/bookmarks"
              ? `${styles["header-link_active"]} ${styles["header-link"]}`
              : styles["header-link"]
          }
          href="/bookmarks"
        >
          Bookmarks
        </Link>
        <span>{counter ? counter : 0}</span>
      </nav>
    </header>
  );
};

export default Header;
