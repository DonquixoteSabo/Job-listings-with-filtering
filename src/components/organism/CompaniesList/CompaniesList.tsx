import { useSelector, useDispatch } from 'react-redux';
//components
import { CompanyCard } from 'components/molecules/CompanyCard/CompanyCard';
//styles
import { Wrapper } from './CompaniesList.styles';
//types
import { Company } from 'types/company';
import { State } from 'types/state';
import { filterCompanies } from 'redux/actionCreators';
import { useEffect, useState } from 'react';

const List = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const companies = useSelector((state: State) => state.filteredCompanies);
  const dispatch = useDispatch();

  const handleFilter = (text: string) => {
    setActiveFilters([...activeFilters, text]);
  };

  useEffect(() => {
    dispatch(filterCompanies(activeFilters));
  }, [dispatch, activeFilters]);

  return (
    <Wrapper>
      {companies.map((company: Company) => (
        <CompanyCard
          key={company.id}
          {...company}
          handleFilter={handleFilter}
        />
      ))}
    </Wrapper>
  );
};

export { List };
