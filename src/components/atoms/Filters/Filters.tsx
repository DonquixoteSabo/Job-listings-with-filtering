import { useDispatch } from 'react-redux';
//actions
import { addFilter, filterCompanies } from 'redux/actionCreators';
//styles
import { Wrapper } from './Filters.styles';

type Props = {
  role: string;
  level: string;
  tools: string[] | [];
  languages: string[] | [];
};

const Filters = ({ role, level, tools, languages }: Props) => {
  const dispatch = useDispatch();

  const handleClick = (filter: string) => {
    dispatch(addFilter(filter));
    dispatch(filterCompanies());
  };

  return (
    <Wrapper>
      {role && <li onClick={() => handleClick(role)}>{role}</li>}
      {level && <li onClick={() => handleClick(level)}>{level}</li>}
      {tools &&
        tools.map((tool: string) => (
          <li onClick={() => handleClick(tool)} key={tool}>
            {tool}
          </li>
        ))}
      {languages &&
        languages.map((language: string) => (
          <li onClick={() => handleClick(language)} key={language}>
            {language}
          </li>
        ))}
    </Wrapper>
  );
};

export { Filters };
