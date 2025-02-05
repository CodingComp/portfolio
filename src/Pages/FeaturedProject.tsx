import "../CSS/FeaturedProject.css";

type ProjectProps = {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
};

function FeaturedProject(props: ProjectProps) {
  return (
    <>
      <div className="featuredProject">
        <h2>{props.projectName}</h2>
        <div className="imagePanel">
          <img
            src={props.projectImage}
            alt="Project Image"
            className="projectImage"
          />
        </div>
        <div className="infoPanel">
          <p>{props.projectDescription}</p>
          <a href={props.projectLink} target="_blank" className="githubLink">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
