import "../CSS/App.css";
import FeaturedProject from "./FeaturedProject.tsx";
import Navbar from "./Navbar.tsx";
import Landing from "./Landing.tsx"


function HomePage() {
  return (
    <>
      <Landing/>
      <Navbar/>
      <div className="projects">
        <FeaturedProject
          projectName="Portfolio Website"
          projectDescription="This is my portfolio website created using React and TypeScript. This site is hosted through github pages."
          projectImage="https://www.pbs.org/wgbh/nova/media/images/JWST_hero.width-2000.jpg"
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
    </>
  );
}

export default HomePage;
