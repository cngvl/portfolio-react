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
      <p>
        <b>{schoolDate}</b>
      </p>
      <p>{schoolDescription}</p>
    </div>
  );
};

export default School;
