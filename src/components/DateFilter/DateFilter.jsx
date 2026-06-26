import 'flatpickr/dist/flatpickr.css'
import styles from './DateFilter.module.css'
import DateInput from './DateInput.jsx'

const DateFilter = ({ dateFrom, dateTo, onDateFromChange, onDateToChange }) => {
  return (
    <div className={styles.dateFilter}>
      <span className={styles.label}>Date</span>
      <DateInput
        value={dateFrom}
        placeholder="from"
        onChange={onDateFromChange}
      />
      <DateInput value={dateTo} placeholder="to" onChange={onDateToChange} />
    </div>
  )
}

export default DateFilter
