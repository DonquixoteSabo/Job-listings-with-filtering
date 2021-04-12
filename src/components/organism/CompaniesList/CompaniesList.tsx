import { connect } from 'react-redux';
//components
import CompanyCard from 'components/molecules/CompanyCard/CompanyCard';
//styles
import { Wrapper } from './CompaniesList.styles';

const List: React.FC<State> = ({ companies }) => {
  console.log(companies);
  return (
    <Wrapper>
      <CompanyCard text='SIEMAA KOMPANIA' />
      <CompanyCard text='CO tam u was' />
    </Wrapper>
  );
};

const mapStateToProps = (state: State) => {
  return {
    companies: state.companies,
  };
};

export default connect(mapStateToProps)(List);
