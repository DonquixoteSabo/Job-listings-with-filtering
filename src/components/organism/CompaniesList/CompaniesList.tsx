import { useSelector } from 'react-redux';
//components
import { CompanyCard } from 'components/molecules/CompanyCard/CompanyCard';
//styles
import { Wrapper } from './CompaniesList.styles';
//types
import { Company } from 'types/company';
import { State } from 'types/state';

const List = () => {
  const companies = useSelector((state: State) => state.companies);
  console.log(companies);

  return (
    <Wrapper>
      {companies.map((company: Company) => (
        <CompanyCard key={company.id} {...company} />
      ))}
    </Wrapper>
  );
};

export { List };
