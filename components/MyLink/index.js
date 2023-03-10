import Link from 'next/link';
import styles from './MyLink.module.scss'

const MyLink = ({href, txt, active}) => {
  return ( 
    <Link href={href} className={styles.myLink}>
      {txt}
    </Link>
   );
}
 
export default MyLink;