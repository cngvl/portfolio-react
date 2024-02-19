import './index.scss';

const School = ({
  schoolInstitute,
  schoolDate,
  schoolCertification,
  schoolDescription,
}) => {
  return (
    <div className="schoolBlock">
      <h2>{schoolInstitute}</h2>
      <h3>{schoolCertification}</h3>
      <p>{schoolDate}</p>
      <p>{schoolDescription}</p>
    </div>
  );
};

export default School;
