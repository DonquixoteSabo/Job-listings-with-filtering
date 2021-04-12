const CompanyCard: React.FC<Company> = ({ company, role }) => {
  return (
    <li>
      {company}, {role}{' '}
    </li>
  );
};

export default CompanyCard;
