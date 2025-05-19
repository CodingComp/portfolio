
import "../CSS/HomePage.css";
import FeaturedProject from "./FeaturedProject.tsx";
import Navbar from "./Navbar.tsx";
import Landing from "./Landing.tsx"

function HomePage() {
  return (
    <>
      <Landing/>
      <Navbar/> 
      <div className="homePage">
        <div className="aboutMe" id="aboutMe">
          <div className="aboutMeInfo">
            <h1>About Me</h1>
            <p>
              Hi there, my name is Josh Daniels. I have been programming for about 6 years now. 
              I have worked with many different languages such as, C++, C#, C, Python, Java, JavaScript / TypeScript, Rust, LUA, Assembly, GLSL and HTML / CSS.
            </p>
            <p>
              I am enrolled at the University of Utah, where I am studying Computer Science. Currently I am working as a software engineer intern at LVT. 
            </p>
          </div>
          <img src="/portfolio/LanguageChart.png"/>
        </div>
        <div className="projects" id="projects">
          <h1>Projects</h1>
          <div className="featuredProjectsView">
            <FeaturedProject
              projectName="Portfolio Website"
              projectDescription="My portfolio website, the site you are currently viewing! Here I hope to show my knowledge and skills in the software world. 
              This site is hosted through github pages."
              projectImage="./Portfolio.png"
              projectLink="https://github.com/CodingComp/portfolio"
              projectNum={1}
              projectLanguages={["HTML", "CSS", "TS"]}
            />

            <FeaturedProject
              projectName="Sprite Editor"
              projectDescription="
              This project is a application where you can create and edit pixel art. 
              This project was created in my CS3505 class at the University of Utah. For this project I worked in a group with five other classmates.
              "
              projectImage="SpriteEditor.png"
              projectLink="https://github.com/CodingComp/a8-sprite-editor-f23-MAUIFanClub"
              projectNum={2}
              projectVideo="https://youtu.be/bxtDRlfBWJs"
              projectLanguages={["C++"]}
            />

            <FeaturedProject
                projectName="Education App"
                projectDescription="
                This ducation application is about logic gates. You can move the logic gate elements around and connect them to other gates.
                This project was also created in my CS3505 where I worked with the same group as the sprite editor project.
                "
                projectImage="EduApp.png"
                projectLink="https://github.com/CodingComp/a9-edu-app-MAUIFanClub"
                projectNum={3}
                projectVideo="https://youtu.be/UsCjhnEPMBg"
                projectLanguages={["C++"]}
            />

            <FeaturedProject
                projectName="Anagram Solver"
                projectDescription="
                 This project is hosted on this website! You can enter a word and recieve a list of anagrams related to said word. The API is hosted on azure and handles
                 finding the anagrams. You can demo it yourself by clicking the 'Live Demo' button below.
                "
                projectImage="AnagramSolver.png"
                projectLink="https://github.com/CodingComp/a9-edu-app-MAUIFanClub"
                projectNum={4}
                liveDemoLink="AnagramSolver"
                projectLanguages={["HTML", "TS", "C#"]}
            />
          </div>
        </div>       
      </div>
    </>
  );
}

export default HomePage;
