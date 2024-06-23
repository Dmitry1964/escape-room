import { SortType } from 'src/features/sort-type';
import './catalog.css';
import { SortLevel } from 'src/features/sort-level';
import { QuestCard } from 'src/widgets/quest-card';

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
           <QuestCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
