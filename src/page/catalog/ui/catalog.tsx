import { SortType } from 'src/widgets/sort-type';
import './catalog.css';
import { SortLevel } from 'src/widgets/sort-type/sort-level';

const Catalog = (): JSX.Element => {
  return (
    <main>
      <section className='catalog'>
        <div className='container'>
          <div className='catalog__wrapper'>
           <span className='catalog__info'>квесты в Санкт-Петербурге</span>
           <h1 className='catalog__title'>Выберите тематику</h1>
           <SortType />
           <SortLevel />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
