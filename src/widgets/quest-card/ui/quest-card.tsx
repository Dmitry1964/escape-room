import { Link } from 'react-router-dom';
import './quest-card.css';

const QuestCard = (): JSX.Element => {
  return (
    <article className='card'>
      <Link to={''}>
        <div className='card__wrapper'>
          <div className='card__image'>
            <picture>
              <source type="image/webp" srcSet="img/content/crypt/crypt-size-s.webp, img/content/crypt/crypt-size-s@2x.webp 2x" />
              <img src="img/content/crypt/crypt-size-s.jpg" srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x" width="344" height="232" alt="Мужчина в клетке в подземелье." />
            </picture>
          </div>
          <div className='card__content'>
            <h2 className='card__title'>Склеп</h2>
            <ul className='card__info-list'>
              <li className='card__info-item'>
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>
                <span>2&ndash;5&nbsp;чел</span>
              </li>
              <li className='card__info-item'>
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>
                <span>Сложный</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default QuestCard;
