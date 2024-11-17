import Container from 'src/shared/container/container';
import styles from './reservation-quest.module.scss';
import { useEffect } from 'react';
import { fetchReservationList } from 'src/app/actions/api-actions';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import { ReservationQuestCard } from 'src/widgets/reservation-quest-crd';


const ReservationQuestPage = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const reservationList = useAppSelector((state) => state.reservationList.reservationList);

  useEffect(() => {
    dispatch(fetchReservationList());
  }, [dispatch]);
  return (
    <main>
      <Container>
        <section className={styles.reservation}>
          <div className={styles.reservation__image}>
            <picture>
              <source type='image/webp' srcSet='content/contacts-bg.webp' />
              <img src='content/contacts-bg.jpg' width={1366} alt='картинка квеста' />
            </picture>
          </div>
          <div className={styles.reservation__info}>
            <div className={styles.reservation__title}>
              <h2>Мои бронирования</h2>
            </div>
            <div className={styles.reservation__content}>
              <div className={styles.reservation__list}>
                {reservationList.length &&
                  reservationList.map((item) => (
                    <ReservationQuestCard key={item.id} questCard={item} />
                  ))}
              </div>
              {reservationList.length === 0 &&
                <div>
                  <img src='content/notfound.jpg ' width={1024} alt='Ничег нет' />
                </div>}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};
export default ReservationQuestPage;
