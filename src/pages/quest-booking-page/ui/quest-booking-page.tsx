import Container from 'src/shared/container/container';
import styles from './quest-booking.module.scss';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { useEffect, useState } from 'react';
import { fetchBookingInfo } from 'src/app/actions/api-actions';
import TimeSlot from 'src/shared/time-slot/time-slot';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { defaultIcon, activeIcon } from 'src/shared/constans';
import { TBookingQuestInfo } from 'src/shared/types/app-types';

const QuestBookingPage = (): JSX.Element => {

  const CENTER: LatLngExpression = [59.938991, 30.315473];

  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [currentBooking, setCurrentBooking] = useState<TBookingQuestInfo | null>(null);

  const dispatch = useAppDispatch();
  const questId = useAppSelector((state) => state.detailedQuest.quest.id);
  const bookingInfoList = useAppSelector((state) => state.bookingQuestInfo.bookingInfo);
  const onMarkerClick = (id: string) => {
    setActiveMarkerId(id);
    setCurrentBooking(bookingInfoList.find((item) => item.id === id) || null);
  };

  const today = currentBooking ? currentBooking.slots.today : [];
  const tomorrow = currentBooking ? currentBooking.slots.tomorrow : [];

  useEffect(() => {
    dispatch(fetchBookingInfo(questId));
  }, [dispatch, questId]);

  useEffect(() => {
    if (bookingInfoList.length) {
      setCurrentBooking(bookingInfoList[0]);
      setActiveMarkerId(bookingInfoList[0].id);
    }
  }, [bookingInfoList]);

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
              <MapContainer style={{ height: '530px', width: '890px' }} center={CENTER} zoom={11} scrollWheelZoom={false}>
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
                <p>{currentBooking.location.address}</p>
                <span>сегодня</span>
                <div className={styles.booking__slots}>
                  {today.length &&
                    today.map((item) => (
                      <TimeSlot key={item.time} slot={item} dayEvent='today' />
                    ))}
                </div>
                <span>завтра</span>
                <div className={styles.booking__slots}>
                  {tomorrow.length &&
                    tomorrow.map((item) => (
                      <TimeSlot key={item.time} slot={item} dayEvent='tomorrow' />
                    ))}
                </div>

              </div>}
          </div>
        </section>
      </Container>
    </main>
  );
};
export default QuestBookingPage;
