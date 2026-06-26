import styles from './DateFilter.module.css'

const DateFilter = ({ dateFrom, dateTo, onDateFromChange, onDateToChange }) => {
  return (
    <div className={styles.dateFilter}>
      <span className={styles.label}>Date</span>
    </div>
  )
}

export default DateFilter
