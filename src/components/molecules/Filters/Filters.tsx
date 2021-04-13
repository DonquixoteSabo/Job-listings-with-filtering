import { Wrapper } from './Filters.styles';

type Props = {
  role: string;
  level: string;
  tools: string[] | [];
  languages: string[] | [];
  handleFilter: (a: string) => void;
};

const Filters = ({ role, level, tools, languages, handleFilter }: Props) => {
  return (
    <Wrapper>
      {role && <li onClick={() => handleFilter(role)}>{role}</li>}
      {level && <li onClick={() => handleFilter(level)}>{level}</li>}
      {tools &&
        tools.map((tool: string) => (
          <li onClick={() => handleFilter(tool)} key={tool}>
            {tool}
          </li>
        ))}
      {languages &&
        languages.map((language: string) => (
          <li onClick={() => handleFilter(language)} key={language}>
            {language}
          </li>
        ))}
    </Wrapper>
  );
};

export { Filters };
