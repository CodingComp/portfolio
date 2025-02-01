import "../CSS/App.css";
import FeaturedProject from "./FeaturedProject.tsx";

function App() {
  return (
    <>
      <h1>Josh Daniels Portfolio</h1>
      <FeaturedProject
        projectName="Portfolio Website"
        projectDescription="This is my portfolio website created using React and TypeScript. This site is hosted through github pages."
        projectImage="https://www.pbs.org/wgbh/nova/media/images/JWST_hero.width-2000.jpg"
        projectLink="https://github.com/CodingComp/portfolio"
      />
    </>
  );
}

export default App;
