import { Wrapper } from './CardBody.styles';
import { CardHeader } from 'components/atoms/CardHeader/CardHeader';

type Props = {
  company: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
};

const CardBody = ({
  company,
  isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
}: Props) => {
  return (
    <Wrapper>
      <CardHeader company={company} isNew={isNew} featured={featured} />
      <strong>{position}</strong>
      <div>
        <p>{postedAt}</p>
        <p>{contract}</p>
        <p>{location}</p>
      </div>
    </Wrapper>
  );
};

export { CardBody };
