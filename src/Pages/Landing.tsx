import "../CSS/Landing.css";
import LandingCanvas from "./LandingCanvas.tsx";

function Landing() {
    return (
    <>
        <div className="landing">
            <LandingCanvas/>
            <div className="landingHeading">
                <h1>Josh Daniels</h1>
                <h3>Software Developer</h3>
            </div>
        </div>
    </>
  );
}

export default Landing;
