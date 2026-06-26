import styles from './ViewToggle.module.css'

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
       
      </button>
      <button
        type="button"
        className={view === 'list' ? styles.active : ''}
        aria-pressed={view === 'list'}
        aria-label="List view"
        onClick={() => onChange('list')}
      >
       
      </button>
    </div>
  )
}

export default ViewToggle
