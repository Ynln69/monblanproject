import styles from './PostList.module.css'
import PostCard from '../PostCard/PostCard.jsx'

const PostList = ({ posts, view }) => {
  const containerClass = view === 'grid' ? styles.grid : styles.list

  return (
    <ul className={containerClass}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} view={view} />
      ))}
    </ul>
  )
}

export default PostList
