import "../CSS/Navbar.css";
import {HashLink} from "react-router-hash-link"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="https://avatars.githubusercontent.com/u/82977701?v=4" className="navbarIcon"/>
        <h1 className="title">Josh Daniels</h1>
        <div className="links">
          <HashLink to="#aboutMe">About Me</HashLink>
          <HashLink to="#projects">Projects</HashLink>
          <HashLink to="#contact">Contact</HashLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
