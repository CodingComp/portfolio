import { JSX } from "react";
import "../CSS/FeaturedProject.css";

type ProjectProps = {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
  projectNum: number;
  projectLanguages: string[];
};

function LanguageBlips(languages: string[]) {
  if (languages == undefined)
  return;

  const languageElements: JSX.Element[] = [];
  for(var i = 0; i < languages.length; i++) {
    languageElements.push(
        <div className="languageBlip" key={i}>
          <h1 className="languageText">{languages[i]}</h1>
        </div>
      );
  }

  return languageElements
}

function FeaturedProject(props: ProjectProps) {
  console.log(props.projectImage)
  return (
    <>
      <div className="featuredProject">
        <div className="imagePanel">
          <img
            src={props.projectImage}
            alt="Project Image"
            className="projectImage"
          />
        </div>
        <div className="numberIcon">
          <h1>#{props.projectNum}</h1>
        </div>
        <div className="infoPanel">
          <div className="projectLanguages">
            {LanguageBlips(props.projectLanguages)}
          </div>
          <div className="infoDetails">
            <h2 className="projectName">{props.projectName}</h2>
            <p className="projectDescription">{props.projectDescription}</p>
            <a href={props.projectLink} target="_blank" className="githubLink">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
