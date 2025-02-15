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
              I have worked in many different languages, such as. C++, C#, C, Java, JavaScript / TypeScript, Rust, Python, LUA, Assembly, GLSL, HTML / CSS.
              I first started by self teaching, from there I took courses in my highschool where I would go to take a concurrent enrollment through my local community college. 
              I now am enrolled at the University of Utah persuing a Computer Science degree.
            </p>
            <p>
              I am most skilled with the C languages. C++ is my favorite language to code in. I enjoy making software and anything to do with programming, one field I really love is game development. 
              While I haven't created a full game I do enjoy working in 3D environments. 
              I first started programming to learn how to use the Unity game engine, after learning more about programming over the years I switched to use Unreal Engine with C++.
            </p>
          </div>
          <img src="https://images.vexels.com/media/users/3/330267/isolated/preview/7edf5e15c1e58438aed35f4d59c0fe10-computer-screen-with-a-programming-code-on-it.png"/>
        </div>
        <div className="projects" id="projects">
          <h1>Projects</h1>
          <div className="featuredProjectsView">
            <FeaturedProject
              projectName="Portfolio Website"
              projectDescription="This is my portfolio website created using React and TypeScript. This site is hosted through github pages."
              projectImage="https://payload-cms.code-b.dev/media/react-logo@3x%201react%20logo%20(1).svg"
              projectLink="https://github.com/CodingComp/portfolio"
              projectNum={1}
              projectLanguages={["HTML", "CSS", "TS"]}
            />

            <FeaturedProject
              projectName="Sprite Editor"
              projectDescription="
              This project is a application where you can create and edit pixel art art. 
              This project was created in my CS3505 class at the University of Utah. For this project I worked in a group with five other classmates.
              "
              projectImage="./SpriteEditor.png"
              projectLink="https://github.com/CodingComp/a8-sprite-editor-f23-MAUIFanClub"
              projectNum={2}
              projectLanguages={["C++"]}
            />

            <FeaturedProject
              projectName="Education App"
              projectDescription="
              This project is an application that teaches the user about logic gates. The logic gates are interactable, you can move them around and connect them to other gates.
              This project was also created in my CS3505 class at the University of Utah where I worked with the same group as the sprite editor project.
              "
              projectImage="./EduApp.png"
              projectLink="https://github.com/CodingComp/a9-edu-app-MAUIFanClub"
              projectNum={3}
              projectLanguages={["C++"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
