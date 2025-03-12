import "../CSS/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="https://avatars.githubusercontent.com/u/82977701?v=4" className="navbarIcon"/>
        <h1 className="title">Josh Daniels</h1>
        <div className="links">
          <a href="#aboutMe">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
