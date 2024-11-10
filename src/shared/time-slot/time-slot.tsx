import { TEventTime } from '../types/app-types';
import styles from './time-slot.module.scss';
import cn from 'classnames';

type TimeSlotProps = {
  slot: TEventTime;
  dayEvent: 'today' | 'tomorrow';
  onTimeSlotClick: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimeSlot = ({ slot, dayEvent, onTimeSlotClick }: TimeSlotProps): JSX.Element => {
  const { time, isAvailable } = slot;
  return (
    <div className={styles.time_slot}>
      <label>
        {isAvailable
          ?
          <input onChange={onTimeSlotClick} className={styles.input__field} type="radio" name='day-event' value={dayEvent} />
          :
          <input onChange={onTimeSlotClick} className={cn(styles.input__field, styles.notActive)} type="radio" name='day-event' value={dayEvent} disabled />}
        <span className={cn(styles.time_slot__label, { [styles.isActive]: isAvailable })}>{time}</span>
      </label>
    </div>
  );
};
export default TimeSlot;
