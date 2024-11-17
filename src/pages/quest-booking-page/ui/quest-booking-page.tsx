import Container from 'src/shared/container/container';
import styles from './quest-booking.module.scss';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { useEffect, useState } from 'react';
import { fetchBookingInfo, setBookQuest } from 'src/app/actions/api-actions';
import TimeSlot from 'src/shared/time-slot/time-slot';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { defaultIcon, activeIcon } from 'src/shared/constans';
import { TBookingQuestInfo, TBookingQuestData } from 'src/shared/types/app-types';
import cn from 'classnames';

type TFieldValid = {
  contactPerson: boolean;
  phone: boolean;
  peopleCount: boolean;
}
const CENTER: LatLngExpression = [59.938991, 30.315473];

const regExName = /^[A-Za-zА-Яа-яЁё]{1,15}$/;
const regExPhone = /^8 \d{3} \d{3} \d{2} \d{2}$/;

const QuestBookingPage = (): JSX.Element => {

  const minMaxPeople = useAppSelector((state) => state.detailedQuest.quest.peopleMinMax);

  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [currentBooking, setCurrentBooking] = useState<TBookingQuestInfo | null>(null);
  const [bookingData, setBookingData] = useState<TBookingQuestData>({
    date: 'today',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 0,
    placeId: activeMarkerId ? activeMarkerId : '',
  });
  const [fieldValid, setFieldValid] = useState<TFieldValid>({
    contactPerson: true,
    peopleCount: true,
    phone: true,
  });

  const dispatch = useAppDispatch();
  const questId = useAppSelector((state) => state.detailedQuest.quest.id);
  const bookingInfoList = useAppSelector((state) => state.bookingQuestInfo.bookingInfo);

  const onMarkerClick = (id: string) => {
    setActiveMarkerId(id);
    setCurrentBooking(bookingInfoList.find((item) => item.id === id) || null);
    setBookingData({ ...bookingData, placeId: currentBooking?.id || '' });
  };
  const getDayEvent = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const dayEvent = evt.target.value as 'today' | 'tomorrow';
    const timeEvent = evt.target.getAttribute('data-time') as string;
    setBookingData({ ...bookingData, date: dayEvent, time: timeEvent });
  };

  const handleUserNumbers = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(evt.target.value, 10);
    if (value >= minMaxPeople[0] && value <= minMaxPeople[1]) {
      setFieldValid({ ...fieldValid, peopleCount: true });
      setBookingData({ ...bookingData, peopleCount: value });
    }

    if (value < minMaxPeople[0] || value > minMaxPeople[1]) {
      setFieldValid({ ...fieldValid, peopleCount: false });

    }
  };

  const handleUserName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (regExName.test(value)) {
      setFieldValid({ ...fieldValid, contactPerson: true });
      setBookingData({ ...bookingData, contactPerson: value });
    }

    if (!regExName.test(value)) {
      setFieldValid({ ...fieldValid, contactPerson: false });
    }
  };

  const handleUserPhone = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (regExPhone.test(value)) {
      setFieldValid({ ...fieldValid, phone: true });
      setBookingData({ ...bookingData, phone: value.replaceAll(' ', '') });
    }

    if (!regExPhone.test(value)) {
      setFieldValid({ ...fieldValid, phone: false });
    }
  };

  const handleCheckbox = () => {
    setBookingData({ ...bookingData, withChildren: !bookingData.withChildren });
  };

  const handleFormSubmit = (evt: React.FocusEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (activeMarkerId && bookingData) {
      dispatch(setBookQuest({questId: questId, bookingData: bookingData}));
    }
  };

  const today = currentBooking ? currentBooking.slots.today : [];
  const tomorrow = currentBooking ? currentBooking.slots.tomorrow : [];

  useEffect(() => {
    dispatch(fetchBookingInfo(questId));
  }, [dispatch, questId]);

  useEffect(() => {
    if (bookingInfoList.length) {
      setCurrentBooking(bookingInfoList[bookingInfoList.length - 1]);
      setActiveMarkerId(bookingInfoList[bookingInfoList.length - 1].id);
    }
  }, [bookingInfoList]);

  useEffect(() => {
    setBookingData((prevBookingData) => ({ ...prevBookingData, placeId: activeMarkerId ? activeMarkerId : '' }));
  }, [activeMarkerId]);

  return (
    <main>
      <Container>
        <section className={styles.booking}>
          <div className={styles.booking__image}>
            <picture>
              <source type='image/webp' srcSet='content/booking-bg.webp' />
              <img src='content/booking-bg.jpg' alt='бэкгроунд' />
            </picture>
          </div>
          <div className={styles.booking__wrapper}>
            <div className={styles.booking__title}>
              <span>Бронирование квеста</span>
              <h2>МАНЬЯК</h2>
            </div>
            <div className={styles.booking__map}>
              <MapContainer style={{ height: '530px', width: '890px' }} center={CENTER} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {bookingInfoList.length &&
                  bookingInfoList.map((item) => (
                    <Marker
                      key={item.id}
                      position={item.location.coords}
                      eventHandlers={{ click: () => onMarkerClick(item.id) }}
                      icon={activeMarkerId === item.id ? activeIcon : defaultIcon}
                    />
                  ))}
              </MapContainer>

            </div>
            {currentBooking &&
              <div className={styles.booking__info}>
                <p>{`Вы выбрали: ${currentBooking.location.address}`}</p>
                <span className={styles.booking__day_event}>сегодня</span>
                <div className={styles.booking__slots}>
                  {today.length &&
                    today.map((item) => (
                      <TimeSlot key={item.time} slot={item} dayEvent='today' onTimeSlotClick={getDayEvent} />
                    ))}
                </div>
                <span className={styles.booking__day_event}>завтра</span>
                <div className={styles.booking__slots}>
                  {tomorrow.length &&
                    tomorrow.map((item) => (
                      <TimeSlot key={item.time} slot={item} dayEvent='tomorrow' onTimeSlotClick={getDayEvent} />
                    ))}
                </div>
              </div>}
            <form
              onSubmit={handleFormSubmit}
              className={styles.booking__form}
            >
              <div className={styles.booking__fields}>
                <label htmlFor="user-name">Ваше Имя</label>
                <input
                  className={cn(styles.booking__input, { [styles.booking__error_field]: !fieldValid.contactPerson })}
                  type="text"
                  onChange={handleUserName}
                  name="user-name"
                  id="user-name"
                  placeholder='Имя'
                />
                {fieldValid.contactPerson === false &&
                  <p className={styles.booking__error_message}>Длина имени не должна превышать 15 знаков</p>}
              </div>
              <div className={styles.booking__fields}>
                <label htmlFor="user-phone">Контактный телефон</label>
                <input
                  onChange={handleUserPhone}
                  className={cn(styles.booking__input, { [styles.booking__error_field]: !fieldValid.phone })}
                  type="text"
                  name='user-phone'
                  id='user-phone'
                  placeholder='Телефон 8 000 000 00 00'
                />
                {fieldValid.phone === false &&
                  <p className={styles.booking__error_message}>Телефон должен быть указан в формате 8 123 456 78 89</p>}

              </div>
              <div className={styles.booking__fields}>
                <label htmlFor="users-numbers">Количество участников</label>
                <input
                  onChange={handleUserNumbers}
                  className={cn(styles.booking__input, { [styles.booking__error_field]: !fieldValid.peopleCount })}
                  type='text'
                  name="users-numbers"
                  id="users-numbers"
                  placeholder='Количество участников'
                />
                {fieldValid.peopleCount === false &&
                  <p className={styles.booking__error_message}>Количество участников в данном квесте должно составлять от {minMaxPeople[0]} до {minMaxPeople[1]} человек</p>}
              </div>
              <div className={styles.booking__children}>
                <input onChange={handleCheckbox} type="checkbox" name="children" id="children" />
                <label htmlFor="children">Со мной будут дети</label>
              </div>
              <input type="submit" value='Забронировать' />
              <div className={styles.booking__agreement}>
                <input type="checkbox" name='agreement' id='agreement' readOnly checked />
                <label htmlFor='agreement'>Я согласен с правилами обработки персональных данных и пользовательским соглашением</label>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default QuestBookingPage;
