import styles from './Card.module.scss'
import dayjs from 'dayjs';
import Link from 'next/link';

const Card = ({ launch, updateStatusState, star }) => {
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
            <svg
              width="16"
              height="30"
              viewBox="0 0 16 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles["card-rocket-title__icon"]}
            >
              <path
                d="M4.00008 0H12.0001V21.5858L15.7072 25.2929L14.293 26.7071L10.0001 22.4142V2H6.00008V22.4142L1.70718 26.7071L0.292969 25.2929L4.00008 21.5858V0Z"
                fill="#EBEBEB"
              />
              <path
                d="M7.00012 30L7.00012 25L9.00012 25L9.00012 30L7.00012 30Z"
                fill="#EBEBEB"
              />
            </svg>
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
        <button
          className={styles["card-star"]}
          onClick={() => updateStatusState(launch.id)}
        >
          <svg
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0489 0.927047C13.3483 0.00573683 14.6517 0.00573993 14.9511 0.927051L17.3677 8.36475C17.5016 8.77677 17.8855 9.05573 18.3188 9.05573H26.1392C27.1079 9.05573 27.5107 10.2953 26.727 10.8647L20.4001 15.4615C20.0496 15.7161 19.903 16.1675 20.0369 16.5795L22.4535 24.0172C22.7529 24.9385 21.6984 25.7047 20.9147 25.1353L14.5878 20.5385C14.2373 20.2839 13.7627 20.2839 13.4122 20.5385L7.08533 25.1353C6.30162 25.7047 5.24714 24.9385 5.54649 24.0172L7.96315 16.5795C8.09702 16.1675 7.95036 15.7161 7.59987 15.4615L1.27299 10.8647C0.489277 10.2953 0.892056 9.05573 1.86078 9.05573H9.68123C10.1145 9.05573 10.4984 8.77677 10.6323 8.36475L13.0489 0.927047Z"
              fill={star ? "#EBEBEB" : "#606060"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
 
export default Card ;