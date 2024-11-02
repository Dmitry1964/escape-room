import Container from 'src/shared/container/container';
import styles from './contacts-page.module.scss';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const ContactsPage = (): JSX.Element => {
  const position: [number, number] = [59.968151, 30.315904];
  const myIcon = L.icon({
    iconUrl: 'svg/marker.svg',
    iconSize: [23, 42],
    iconAnchor: [12, 42],
  });
  return (
    <main>
      <Container>
        <section className={styles.contacts}>
          <div className={styles.contacts__title}>
            <span>квесты в Санкт-Петербурге</span>
            <h2></h2>
          </div>
          <div className={styles.contacts__wrapper}>
            <div className={styles.contacts__info}>

            </div>
            <div className={styles.contacts__map}>
              <MapContainer style={{ height: '370px', width: '617px' }} center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                  <Popup>
                    наб. Реки Карповки, 5
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};
export default ContactsPage;
