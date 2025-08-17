import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-wrapper">
    <div className="about-container">
      <h1>About This App</h1>

      <section>
        <h2>💡 What is this?</h2>
        <p>This is an interactive quiz website.</p>
        <p>You can take quizzes, track your score, view leaderboards, and challenge yourself!</p>
      </section>

      <section>
        <h2>🛠 Tech Stack</h2>
        <ul>
          <li>React.js</li>
          <li>React Router</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>LocalStorage</li>
        </ul>
      </section>

      <section>
        <h2>📚 What I Learned</h2>
        <ul>
          <li>Routing and navigation with React Router</li>
          <li>State management with hooks</li>
          <li>Saving & retrieving data with localStorage</li>
          <li>Creating responsive and animated UI</li>
        </ul>
      </section>

    
    </div>
    </div>
  );
}

export default AboutPage;