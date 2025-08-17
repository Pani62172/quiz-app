import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        QuizMaster 🧠
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/add-player">Start Quiz</Link>
        <Link to="/leaderboard">Scores</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
  <span className={`bar ${isOpen ? "rotate-top" : ""}`}></span>
  <span className={`bar ${isOpen ? "fade-middle" : ""}`}></span>
  <span className={`bar ${isOpen ? "rotate-bottom" : ""}`}></span>
</div>

    </nav>
  );
}

export default Navbar;