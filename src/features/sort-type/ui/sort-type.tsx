import { sortType } from 'src/shared';
import { SortTypeItem } from 'src/entities/sort-type-item';
import './sort-type.css';

const SortType = (): JSX.Element => {
  return (
    <ul className='sort__type-list'>
      {sortType.map((item) => (
        <SortTypeItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SortType
