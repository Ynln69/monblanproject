import styles from './Header.module.css'
import DateFilter from '../DateFilter/DateFilter.jsx'

const Header = ({ dateFrom, dateTo, onDateFromChange, onDateToChange }) => {
  return (
    <header className={styles.header}>
      <DateFilter
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={onDateFromChange}
        onDateToChange={onDateToChange}
      />
    </header>
  )
}

export default Header
