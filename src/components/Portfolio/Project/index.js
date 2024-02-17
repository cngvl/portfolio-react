import './index.scss';

const Project = ({
  ProjectTitle,
  ProjectStack,
  ProjectPreview,
  ProjectDescription,
  ProjectLink,
}) => {
  return (
    <>
      <div className="project-block column">
        <img
          src={ProjectPreview}
          alt="placeholder"
          className="project-preview"
        />
        <h2>{ProjectTitle}</h2>
        <div className="project-stack"></div>
        <p>{ProjectDescription}</p>
        <a href={ProjectLink} target="_blank" rel="noreferrer">
          Visit Project
        </a>
      </div>
    </>
  );
};

export default Project;
