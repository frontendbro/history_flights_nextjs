import styles from './Card.module.scss'
import dayjs from 'dayjs';
import Link from 'next/link';

const Card = ({ launch }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-mission"]}>
        <div className={styles["card-mission__title"]}>
          {launch?.mission_name}
        </div>
        <div className={styles["card-mission__date"]}>
          {dayjs(launch?.launch_date_utc).format("YYYY MMMM DD")}
        </div>
        <div className={styles["card-mission__label"]}>Details</div>
        <div className={styles["card-mission__details"]}>{launch?.details}</div>
        {launch?.links?.presskit ? (
          <Link
            className={styles["card-rocket__link"]}
            href={launch?.links?.presskit}
            target="_blank"
          >
            Press Kit
          </Link>
        ) : null}
      </div>
      <div className={styles["card-rocket"]}>
        <div className={styles["card-rocket-wrap"]}>
          <div className={styles["card-rocket-title"]}>
            <div className={styles["card-rocket-title__txt"]}>
              {launch?.rocket?.rocket_name}
            </div>
            {launch?.rocket?.rocket.active ? (
              <div className={styles["card-rocket-title__label"]}>Active</div>
            ) : null}
          </div>
          <ul className={styles["card-rocket-list"]}>
            <li className={styles["card-rocket-list-item"]}>
              <div className={styles["card-rocket-list-item__label"]}>
                First flight
              </div>
              <div className={styles["card-rocket-list-item__txt"]}>
                {dayjs(launch?.rocket?.rocket?.first_flight).format(
                  "YYYY MMMM DD"
                )}
              </div>
            </li>
            <li className={styles["card-rocket-list-item"]}>
              <div className={styles["card-rocket-list-item__label"]}>
                Engines
              </div>
              <div className={styles["card-rocket-list-item__txt"]}>
                {launch?.rocket?.rocket?.engines?.number}
              </div>
            </li>
            <li className={styles["card-rocket-list-item"]}>
              <div className={styles["card-rocket-list-item__label"]}>
                Stages
              </div>
              <div className={styles["card-rocket-list-item__txt"]}>
                {launch?.rocket?.rocket?.stages}
              </div>
            </li>
            <li className={styles["card-rocket-list-item"]}>
              <div className={styles["card-rocket-list-item__label"]}>
                Engine layout
              </div>
              <div className={styles["card-rocket-list-item__txt"]}>
                {launch?.rocket?.rocket?.engines?.layout}
              </div>
            </li>
          </ul>
          <Link
            className={styles["card-rocket__link"]}
            href={launch?.links?.wikipedia}
            target="_blank"
          >
            Read more on Wikipedia
          </Link>
        </div>
        <button>star</button>
      </div>
    </div>
  );
};
 
export default Card ;