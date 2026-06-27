import styles from "./LoadMore.module.css";

const LoadMore = ({ onClick, hasMore, isLoading }) => {
  if (!hasMore) return null;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "LOAD MORE"}
    </button>
  );
};

export default LoadMore;
