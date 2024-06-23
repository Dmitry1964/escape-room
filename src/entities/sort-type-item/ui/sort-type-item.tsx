import { TSortTypeItem } from 'src/shared';
import './sort-type-item.css'
import { NavLink } from 'react-router-dom';

type ItemProps = {
  item: TSortTypeItem
}

const SortTypeItem = ({item}: ItemProps): JSX.Element => {
  const {id, name, height, width} = item;
  return (
    <li className="sort__type-item">
      <NavLink to="#">
        <svg width={width} height={height}>
          <use xlinkHref={`#${id}`}></use>
        </svg>
        <span>{name}</span>
      </NavLink>
    </li>
  )
}

export default SortTypeItem;
