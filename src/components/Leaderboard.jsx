import { useEffect, useState } from "react";
import "./Leaderboard.css";

function Leaderboard() {
  const [history, setHistory] = useState([]);
  const [sortBy, setSortBy] = useState("score");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("scoreHistory") || "[]");
    setHistory(data);
  }, []);

  const sortedHistory = [...history].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "time") return a.time - b.time;
    return 0;
  });

  return (
    <div className="leaderboard-container">
      <h1>🏆 Leaderboard</h1>

      <div className="sort-controls">
        <button
          className={sortBy === "score" ? "active" : ""}
          onClick={() => setSortBy("score")}
        >
          Sort by Score
        </button>
        <button
          className={sortBy === "time" ? "active" : ""}
          onClick={() => setSortBy("time")}
        >
          Sort by Time
        </button>
      </div>

      {sortedHistory.length === 0 ? (
        <p>No quiz attempts yet. Play some quizzes first!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
              <th>Time (s)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.score} / {entry.total}</td>
                <td>{entry.time}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;