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
        <div className="project-text">
          <h2>{ProjectTitle}</h2>
          <p>Stack used: {ProjectStack}</p>
          <p>{ProjectDescription}</p>
          <a href={ProjectLink} target="_blank" rel="noreferrer">
            Visit Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
