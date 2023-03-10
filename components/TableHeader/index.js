import styles from "./TableHeader.module.scss"

const TableHeader = () => {
  return (
    <div className={styles.tableHeader}>
      <div className={styles.tableHeader__txt}>Mission</div>
      <div className={styles.tableHeader__txt}>Rocket</div>
    </div>
  );
}
 
export default TableHeader;