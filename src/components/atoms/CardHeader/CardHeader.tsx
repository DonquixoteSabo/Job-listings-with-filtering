import { Wrapper, HotNews } from './CardHeader.styles';

type Props = {
  company: string;
  isNew: boolean;
  featured: boolean;
};

const CardHeader = ({ company, isNew, featured }: Props) => {
  return (
    <Wrapper>
      <p>{company}</p>
      {isNew && <HotNews isNew>New!</HotNews>}
      {featured && <HotNews>featured</HotNews>}
    </Wrapper>
  );
};

export { CardHeader };
