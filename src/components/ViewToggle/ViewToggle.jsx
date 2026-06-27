import styles from './ViewToggle.module.css'

const GridIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" aria-hidden="true">
    <rect width="6" height="6" />
    <rect x="8" width="6" height="6" />
    <rect x="16" width="6" height="6" />
    <rect y="8" width="6" height="6" />
    <rect x="8" y="8" width="6" height="6" />
    <rect x="16" y="8" width="6" height="6" />
    <rect y="16" width="6" height="6" />
    <rect x="8" y="16" width="6" height="6" />
    <rect x="16" y="16" width="6" height="6" />
  </svg>
)

const ListIcon = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="currentColor" aria-hidden="true">
    <rect width="6" height="6" />
    <rect y="8" width="6" height="6" />
    <rect y="16" width="6" height="6" />
    <rect x="9" y="2" width="15" height="2" />
    <rect x="9" y="10" width="15" height="2" />
    <rect x="9" y="18" width="15" height="2" />
  </svg>
)

const ViewToggle = ({ view, onChange }) => {
  return (
    <div className={styles.toggle}>
      <button
        type="button"
        className={view === 'grid' ? styles.active : ''}
        aria-pressed={view === 'grid'}
        aria-label="Grid view"
        onClick={() => onChange('grid')}
      >
        <GridIcon />
      </button>
      <button
        type="button"
        className={view === 'list' ? styles.active : ''}
        aria-pressed={view === 'list'}
        aria-label="List view"
        onClick={() => onChange('list')}
      >
        <ListIcon />
      </button>
    </div>
  )
}

export default ViewToggle
