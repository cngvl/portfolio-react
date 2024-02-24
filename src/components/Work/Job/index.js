import './index.scss';

const Job = ({ jobTitle, jobCompany, jobDate, jobDescription }) => {
  return (
    <div className="job-block">
      <h2>{jobTitle}</h2>
      <h3>{jobDate}</h3>
      <p>{jobCompany}</p>
      <p>{jobDescription}</p>
    </div>
  );
};

export default Job;
