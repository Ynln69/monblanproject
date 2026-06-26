import { useState } from 'react'
import styles from './App.module.css'
import { posts as allPosts } from './data/posts.js'
import Header from './components/Header/Header.jsx'
import ViewToggle from './components/ViewToggle/ViewToggle.jsx'
import PostList from './components/PostList/PostList.jsx'
import LoadMore from './components/LoadMore/LoadMore.jsx'

const PAGE_SIZE = 9

const App = () => {
  const [view, setView] = useState('list')
  
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const visiblePosts = allPosts.slice(0, visibleCount)
  const hasMore = visibleCount < allPosts.length

  return (
    <div className={styles.app}>
      <img
        src="/decor-top.png"
        alt="decorative top "
        className={styles.contentDecorTop}
      />
      <Header
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
      />

      <main className={styles.content}>
        <div className={styles.toolbar}>
          <ViewToggle view={view} onChange={setView} />
        </div>

        <PostList posts={visiblePosts} view={view} />

        <LoadMore
          hasMore={hasMore}
          onClick={() =>
            setVisibleCount((currentCount) => currentCount + PAGE_SIZE)
          }
        />
      </main>
    </div>
  );
}

export default App
