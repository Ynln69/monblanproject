import styles from './PostCard.module.css'

const PostCard = ({ post, view }) => {
  const cardClass = view === 'grid' ? styles.cardGrid : styles.cardList

  return (
    <li className={cardClass}>
      <div className={styles.thumb}>
      </div>
      <div className={styles.body}>
      </div>
    </li>
  )
}

export default PostCard
