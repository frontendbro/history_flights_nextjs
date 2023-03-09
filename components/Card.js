import styles from '../styles/Card.module.scss'

const Card = ({history}) => {
  return (
    <div className={styles.card}>{ history.name }</div>
  );
}
 
export default Card ;