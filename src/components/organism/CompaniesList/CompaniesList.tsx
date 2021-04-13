import { useSelector } from 'react-redux';
//components
import { CompanyCard } from 'components/molecules/CompanyCard/CompanyCard';
import { FilterBar } from 'components/molecules/FilterBar/FilterBar';
//styles
import { Wrapper } from './CompaniesList.styles';
//types
import { Company } from 'types/company';
import { State } from 'types/state';

const List = () => {
  const companies = useSelector((state: State) => state.filteredCompanies);
  const activeFilters = useSelector((state: State) => state.filters);

  return (
    <Wrapper>
      {activeFilters.length > 0 && <FilterBar />}
      {companies.map((company: Company) => (
        <CompanyCard key={company.id} {...company} />
      ))}
    </Wrapper>
  );
};

export { List };
