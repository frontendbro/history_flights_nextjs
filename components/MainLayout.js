import styles from "../styles/MainLayout.module.scss";
import Head from "next/head";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Head>
        <meta keywords="history flights apollo"></meta>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
