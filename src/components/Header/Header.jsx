import styles from './Header.module.css'
import DateFilter from '../DateFilter/DateFilter.jsx'

const STATS = [
  { value: '870', label: 'posts' },
  { value: '11,787', label: 'followers' },
  { value: '112', label: 'following' },
]

const Header = ({ dateFrom, dateTo, onDateFromChange, onDateToChange }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img
          className={styles.logo}
          src="/logo.png"
          alt="monblanproject logo"
        />

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>monblanproject</h1>
            <p className={styles.startText}>Start on 17-02-2016</p>
          </div>

          <ul className={styles.stats}>
            {STATS.map((stat) => (
              <li key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>{" "}
                {stat.label}
              </li>
            ))}
          </ul>

          <DateFilter
            dateFrom={dateFrom}
            dateTo={dateTo}
            onDateFromChange={onDateFromChange}
            onDateToChange={onDateToChange}
          />
        </div>
      </div>
    </header>
  );
}

export default Header
