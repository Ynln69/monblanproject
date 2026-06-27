import styles from './PostCard.module.css'
import { HeartIcon, CommentIcon } from './icons.jsx'

const MetricGroup = ({ label, likes, comments }) => (
  <div className={styles.group}>
    <span className={styles.metricLabel}>{label}</span>
    <ul className={styles.metrics}>
      <li className={styles.metric}>
        <HeartIcon /> {likes}
      </li>
      <li className={styles.metric}>
        <CommentIcon /> {comments}
      </li>
    </ul>
  </div>
)

const ListBody = ({ post }) => (
  <div className={styles.bodyList}>
    <MetricGroup
      label={post.today.label}
      likes={post.today.likes}
      comments={post.today.comments}
    />
    <MetricGroup
      label={post.dated.label}
      likes={post.dated.likes}
      comments={post.dated.comments}
    />
    <ul className={styles.action}>
      <li className={styles.actionLabel}>{post.action}</li>
      <li className={styles.actionDate}>{post.date}</li>
    </ul>
  </div>
)

const GridBody = ({ post }) => (
  <div className={styles.bodyGrid}>
    <span className={styles.metricLabel}>{post.today.label}</span>
    <span className={styles.metricLabel}>{post.dated.label}</span>

    <span className={styles.metric}>
      <HeartIcon /> {post.today.likes}
    </span>
    <span className={styles.metric}>
      <HeartIcon /> {post.dated.likes}
    </span>

    <span className={styles.metric}>
      <CommentIcon /> {post.today.comments}
    </span>
    <span className={styles.metric}>
      <CommentIcon /> {post.dated.comments}
    </span>

    <span className={styles.actionLabel}>{post.action}</span>
    <span className={styles.actionDate}>{post.date}</span>
  </div>
)

const PostCard = ({ post, view }) => {
  const isGrid = view === 'grid'
  const cardClass = isGrid ? styles.cardGrid : styles.cardList
  const image = isGrid ? post.imageGrid : post.imageList

  return (
    <li className={cardClass}>
      <img className={styles.thumb} src={image} alt="" loading="lazy" />
      {isGrid ? <GridBody post={post} /> : <ListBody post={post} />}
    </li>
  )
}

export default PostCard
