import { useEffect, useRef, useState } from 'react'
import styles from './App.module.css'
import { posts as allPosts } from './data/posts.js'
import Header from './components/Header/Header.jsx'
import ViewToggle from './components/ViewToggle/ViewToggle.jsx'
import PostList from './components/PostList/PostList.jsx'
import LoadMore from './components/LoadMore/LoadMore.jsx'
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton.jsx'

const GRID_PAGE_SIZE = 8
const LIST_PAGE_SIZE = 9

const App = () => {
  const [view, setView] = useState('list')

  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)

  const [visibleCount, setVisibleCount] = useState(LIST_PAGE_SIZE)
  const [isLoading, setIsLoading] = useState(false)
  const loadTimer = useRef(null)

  const pageSize = view === 'grid' ? GRID_PAGE_SIZE : LIST_PAGE_SIZE

  useEffect(() => () => clearTimeout(loadTimer.current), [])

  // Reveal the next page. New posts append below, so the scroll position
  // stays put — the user isn't thrown up or down.
  const handleLoadMore = () => {
    if (loadTimer.current) return
    setIsLoading(true)
    loadTimer.current = setTimeout(() => {
      setVisibleCount((currentCount) => currentCount + pageSize)
      setIsLoading(false)
      loadTimer.current = null
    }, 600)
  }

  const handleViewChange = (nextView) => {
    const nextPageSize =
      nextView === 'grid' ? GRID_PAGE_SIZE : LIST_PAGE_SIZE
    setVisibleCount((currentCount) => {
      const pages = Math.max(1, Math.round(currentCount / nextPageSize))
      return pages * nextPageSize
    })
    setView(nextView)
  }

  const visiblePosts = allPosts.slice(0, visibleCount)
  const hasMore = visibleCount < allPosts.length

  return (
    <div className={styles.app}>
      <img
        src="/decor-top.png"
        alt="decorative top "
        className={styles.contentDecorTop}
        loading="lazy"
      />
      <img
        src="/decor-bottom.png"
        alt="decorative bottom "
        className={styles.contentDecorBottom}
        loading="lazy"
      />
      <Header
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
      />

      <main className={styles.content}>
        <div className={styles.toolbar}>
          <ViewToggle view={view} onChange={handleViewChange} />
        </div>

        <PostList posts={visiblePosts} view={view} />

        <LoadMore
          hasMore={hasMore}
          isLoading={isLoading}
          onClick={handleLoadMore}
        />
      </main>

      <ScrollTopButton />
    </div>
  );
}

export default App
