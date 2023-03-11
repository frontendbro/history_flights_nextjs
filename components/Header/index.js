import styles from "./Header.module.scss";
import Link from "next/link";
import MyLink from "../MyLink";

const Header = ({counter}) => {
  return (
    <header className={styles.header}>
      <h1>SpaceX Launches</h1>
      <nav>
        <MyLink href="/" txt="Show all" className="myLink_active" />
        <MyLink href="/bookmarks" txt="Bookmarks" />
        <span>{counter ? counter : 0}</span>
      </nav>
    </header>
  );
};

export default Header;
