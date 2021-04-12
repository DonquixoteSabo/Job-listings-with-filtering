interface Props {
  text: string;
}

const CompanyCard: React.FC<Props> = ({ text }) => {
  return <li>S{text}</li>;
};

export default CompanyCard;
