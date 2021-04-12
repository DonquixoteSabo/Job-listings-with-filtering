//I will extract it to new files later :D
import styled from 'styled-components';
//types
import { Company } from 'types/company';

const Card = styled.li`
  width: 100%;
  height: 105px;
  background-color: red;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 70px;
  margin-left: 20px;
  border-radius: 50%;
`;

const CompanyCard = ({ company, role, logo }: Company) => {
  return (
    <Card>
      <Img src={process.env.PUBLIC_URL + logo} alt={`${company} logo`} />
    </Card>
  );
};

export { CompanyCard };
