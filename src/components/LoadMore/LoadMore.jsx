import styles from "./LoadMore.module.css";

const LoadMore = ({ onClick, hasMore }) => {
  if (!hasMore) return null;

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      LOAD MORE
    </button>
  );
};

export default LoadMore;
