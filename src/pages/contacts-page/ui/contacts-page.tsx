import Container from 'src/shared/container/container';
import styles from './contacts-page.module.scss';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { defaultIcon } from 'src/shared/constans';

const ContactsPage = (): JSX.Element => {
  const position: [number, number] = [59.968151, 30.315904];
  return (
    <main>
      <Container>
        <section className={styles.contacts}>
          <div className={styles.contacts__image}>
            <picture>
              <source type='image/webp' srcSet='content/contacts-bg.webp' />
              <img src='content/contacts-bg.jpg' width={1366} alt='картинка квеста' />
            </picture>
          </div>
          <div className={styles.contacts__info}>
            <div className={styles.contacts__title}>
              <span>квесты в Санкт-Петербурге</span>
              <h2>Контакты</h2>
            </div>
            <div className={styles.contacts__content}>
              <div className={styles.contacts__address}>
                <dl>
                  <dt>Адрес</dt>
                  <dd>Санкт-Петербург,<br/>Набережная реки Карповка, д 5П</dd>
                  <dt>Режим работы</dt>
                  <dd>Ежедневно, с 10:00 до 22:00</dd>
                  <dt>Телефон</dt>
                  <dd>8 (800) 333-55-99</dd>
                  <dt>E-mail</dt>
                  <dd>info@escape-room.ru</dd>
                </dl>
              </div>
              <div className={styles.contacts__map}>
                <MapContainer style={{ height: '370px', width: '617px' }} center={position} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} icon={defaultIcon}>
                    <Popup>
                      наб. Реки Карповки, 5
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};
export default ContactsPage;
