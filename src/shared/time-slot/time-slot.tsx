import { TEventTime } from '../types/app-types';
import styles from './time-slot.module.scss';
import cn from 'classnames';

type TimeSlotProps = {
  slot: TEventTime;
  dayEvent: string;
}

const TimeSlot = ({ slot, dayEvent }: TimeSlotProps): JSX.Element => {
  const { time, isAvailable } = slot;
  return (
    <div className={styles.time_slot}>
      <label>
        {isAvailable
          ?
          <input className={styles.input__field} type="radio" name={dayEvent} />
          :
          <input className={cn(styles.input__field, styles.notActive)} type="radio" name={dayEvent} disabled />}
        <span className={cn(styles.time_slot__label, { [styles.isActive]: isAvailable })}>{time}</span>
      </label>
    </div>
  );
};
export default TimeSlot;
