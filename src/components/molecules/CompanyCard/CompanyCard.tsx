//I will extract it to new files later :D
import styled from 'styled-components';
//types
import { Company } from 'types/company';

const Card = styled.li`
  padding: 15px 0;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 5px 5px 5px #ddd;
`;

const Img = styled.img`
  width: 70px;
  margin-left: 20px;
  border-radius: 50%;
`;

const HotNews = styled.span<{ isNew?: boolean }>`
  display: block;
  padding: 5px;
  font-size: 10px;
  background-color: ${({ theme, isNew }) =>
    isNew ? theme.colors.primary : theme.colors.darkCyan_2};
  text-transform: uppercase;
  color: #fff;
  border-radius: 10px;
`;

const CardBody = styled.div`
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    p {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;
    }

    > span,
    p {
      margin-left: 10px;
    }
  }

  .position {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkCyan_2};
  }

  .information p {
    display: inline-block;
    font-size: 10px;
    color: gray;
    margin-left: 10px;
  }
`;

const CompanyCard = ({
  company,
  logo,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  isNew,
  tools,
}: Company) => {
  return (
    <Card>
      <Img src={process.env.PUBLIC_URL + logo} alt={`${company} logo`} />
      <CardBody>
        <header>
          <p>{company}</p>
          {isNew && <HotNews isNew>New!</HotNews>}
          {featured && <HotNews>featured</HotNews>}
        </header>
        <strong className='position'>{position}</strong>
        <div className='information'>
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export { CompanyCard };
