/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
function CityItem({ item }) {
  console.log(item);
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{item.emoji}</span>
      <h3 className={styles.name}>{item.cityName}</h3>
      <time>{formatDate(item.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
