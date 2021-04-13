import { Filter, Bar } from './FilterBar.styles';

interface Props {
  handleDeleteFilter: (a: string) => void;
  filters: string[];
}

const FilterBar = ({ handleDeleteFilter, filters }: Props) => {
  return (
    <Bar>
      {filters.map((filter) => (
        <Filter key={filter}>
          {filter}
          <button onClick={() => handleDeleteFilter(filter)}>X</button>
        </Filter>
      ))}
      <li className='clear' onClick={() => handleDeleteFilter('all')}>
        Clear
      </li>
    </Bar>
  );
};

export { FilterBar };
