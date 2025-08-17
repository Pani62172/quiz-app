import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left fade-in">
        <h1>Ready to challenge your brain?</h1>
        <p>Test your knowledge across multiple categories. Let’s see what you’ve got!</p>
        <Link to="/add-player">
          <button className="start-btn">Start Quiz</button>
        </Link>
      </div>

      <div className="hero-right float">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-quiz-7073502-5752166.png"
          alt="Quiz Illustration"
        />
      </div>
    </div>
  );
}

export default Hero;