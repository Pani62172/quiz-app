import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ScoreSummary.css";

function ScoreSummary() {
  const [player, setPlayer] = useState(null);
  const [scoreData, setScoreData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPlayer = JSON.parse(localStorage.getItem("currentPlayer"));
    const history = JSON.parse(localStorage.getItem("scoreHistory") || "[]");

    if (!currentPlayer || !history.length) return navigate("/");

    const latest = history[history.length - 1];
    setPlayer(currentPlayer);
    setScoreData(latest);
  }, []);

  const getMessage = () => {
    if (!scoreData) return "";
    const { score, total } = scoreData;
    const percentage = (score / total) * 100;

    if (percentage === 100) return "🎯 Quiz Champion!";
    if (percentage >= 70) return "💪 Great Job!";
    if (percentage >= 40) return "📘 Keep Practicing!";
    return "☕ More caffeine, maybe?";
  };

  const handlePlayAgain = () => {
    localStorage.removeItem("currentPlayer");
    navigate("/");
  };

  if (!player || !scoreData) return <h2>Loading summary...</h2>;

  return (
    <div className="summary-container">
      <h1>Well Done, {player.name}!</h1>
      <p>Final Score: {scoreData.score} / {scoreData.total}</p>
      <p>Total Time Taken: {scoreData.time}s</p>
      <h2>{getMessage()}</h2>

      <button className="again-btn" onClick={handlePlayAgain}>
        Play Again 🔄
      </button>
    </div>
  );
}

export default ScoreSummary;