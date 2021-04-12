//components
import { CompanyCard } from 'components/molecules/CompanyCard/CompanyCard';
//styles
import { Wrapper } from './CompaniesList.styles';
//types
import { Company } from 'types/company';

const List = () => {
  const companies = [];
  return (
    <Wrapper>
      {/* {companies.map((company: Company) => (
        <CompanyCard key={company.id} {...company} />
      ))} */}
    </Wrapper>
  );
};

export { List };
