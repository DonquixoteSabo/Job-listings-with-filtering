import CompanyCard from 'components/molecules/CompanyCard/CompanyCard';

import { Wrapper } from './CompaniesList.styles';

function List() {
  return (
    <Wrapper>
      <CompanyCard text='SIEMAA KOMPANIA' />
      <CompanyCard text='CO tam u was' />
    </Wrapper>
  );
}

export default List;
