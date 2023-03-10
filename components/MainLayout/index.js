import styles from "./MainLayout.module.scss";
import Head from "next/head";
import Header from "../Header";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Head>
        <meta keywords="history flights apollo"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
