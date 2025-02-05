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
        <div className="aboutMe">
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
        <div className="projects">
          <h1>Projects</h1>
          <div className="featuredProjectsView">
            <FeaturedProject
              projectName="Portfolio Website"
              projectDescription="This is my portfolio website created using React and TypeScript. This site is hosted through github pages."
              projectImage="https://payload-cms.code-b.dev/media/react-logo@3x%201react%20logo%20(1).svg"
              projectLink="https://github.com/CodingComp/portfolio"
            />

            <FeaturedProject
              projectName="Test Project 1"
              projectDescription="Testing Project 1"
              projectImage="https://i.natgeofe.com/n/1ac334a0-ac4e-4745-a292-169b0a349e8b/grand-peaks-mount-cook.jpg"
              projectLink=""
            />

            <FeaturedProject
              projectName="Test Project 2"
              projectDescription="Testing Project 2"
              projectImage="https://media.istockphoto.com/id/477307170/photo/night-city-view-of-amsterdam-the-netherlands.jpg?s=612x612&w=0&k=20&c=ALSX7lL09Mf114X-b7txCUmI9fyN1VB_SCToEhXatu4="
              projectLink=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
