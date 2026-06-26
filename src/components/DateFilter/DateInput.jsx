import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import styles from "./DateFilter.module.css";

const DateInput = ({ value, placeholder, onChange }) => {
  const inputRef = useRef(null);
  const pickerRef = useRef(null);

  useEffect(() => {
    const picker = flatpickr(inputRef.current, {
      dateFormat: "d_m_Y",
      defaultDate: value || undefined,
      onChange: (selectedDates) => {
        onChange(selectedDates[0] ?? null);
      },
    });
    pickerRef.current = picker;

    return () => picker.destroy();
  }, []);

  useEffect(() => {
    if (pickerRef.current) {
      pickerRef.current.setDate(value || "", false);
    }
  }, [value]);

  const handleClear = () => {
    pickerRef.current?.clear();
    onChange(null);
  };

  const openCalendar = () => pickerRef.current?.open();

  return (
    <div className={styles.inputWrap}>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder={placeholder}
        readOnly
      />
      <div className={styles.buttonBox}>
        <button
          type="button"
          className={styles.clearBtn}
          aria-label="Clear date"
          onClick={handleClear}
        >
          <img src="/icon/bx-plus.svg" alt="" />
        </button>
        <button
          type="button"
          className={styles.calendarBtn}
          aria-label="Open calendar"
          onClick={openCalendar}
        >
          <img src="/icon/bx-calendar.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default DateInput;
