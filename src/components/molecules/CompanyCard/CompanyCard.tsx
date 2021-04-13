import { Filters } from 'components/molecules/Filters/Filters';
import { CardBody } from 'components/atoms/CardBody/CardBody';
//styles
import { Card, Img } from './CompanyCard.styles';
//types
import { Company } from 'types/company';

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
      <CardBody
        featured={featured}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
        isNew={isNew}
        company={company}
      />
      <Filters role={role} tools={tools} languages={languages} level={level} />
    </Card>
  );
};

export { CompanyCard };
