import { Wrapper } from './Filters.styles';

type Props = {
  role: string;
  level: string;
  tools: string[] | [];
  languages: string[] | [];
};

const Filters = ({ role, level, tools, languages }: Props) => {
  return (
    <Wrapper>
      {role && <li>{role}</li>}
      {level && <li>{level}</li>}
      {tools && tools.map((tool: string) => <li key={tool}>{tool}</li>)}
      {languages &&
        languages.map((language: string) => <li key={language}>{language}</li>)}
    </Wrapper>
  );
};

export { Filters };
