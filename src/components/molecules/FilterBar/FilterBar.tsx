import { useSelector, useDispatch } from 'react-redux';
//actions
import {
  deleteFilter,
  deleteFilters,
  filterCompanies,
} from 'redux/actionCreators';
//types
import { State } from 'types/state';
//styles
import { Filter, Bar } from './FilterBar.styles';

const FilterBar = () => {
  const filters = useSelector((state: State) => state.filters);
  const dispatch = useDispatch();

  const handleClick = (filter: string) => {
    if (filter === 'all') {
      dispatch(deleteFilters());
      dispatch(filterCompanies());
    }
    dispatch(deleteFilter(filter));
    dispatch(filterCompanies());
  };

  return (
    <Bar>
      {filters.map((filter: string) => (
        <Filter key={filter}>
          {filter}
          <button onClick={() => handleClick(filter)}>X</button>
        </Filter>
      ))}
      <li className='clear' onClick={() => handleClick('all')}>
        Clear
      </li>
    </Bar>
  );
};

export { FilterBar };
