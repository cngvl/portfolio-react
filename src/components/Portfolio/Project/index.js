import './index.scss';

const Project = ({
  ProjectTitle,
  ProjectStack,
  ProjectPreview,
  ProjectDescription,
  ProjectLive,
  ProjectLink,
}) => {
  return (
    <>
      <div className="project-block column">
        <div className="project-preview">
          <img src={ProjectPreview} alt="placeholder" />
        </div>

        <div className="project-text">
          <h2>{ProjectTitle}</h2>
          <p>Stack used: {ProjectStack}</p>
          <p>{ProjectDescription}</p>

          {ProjectLive ? (
            <a href={ProjectLink} target="_blank" rel="noreferrer">
              Visit Live Project
            </a>
          ) : (
            <a href={ProjectLink} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
