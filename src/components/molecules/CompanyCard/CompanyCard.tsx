//I will extract it to new files later :D
import styled from 'styled-components';

const Card = styled.li`
  width: 100%;
  height: 105px;
  background-color: red;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const CompanyCard: React.FC<Company> = ({ company, role, logo }) => {
  return (
    <Card>
      <Img src={process.env.PUBLIC_URL + logo} />
    </Card>
  );
};

export default CompanyCard;
