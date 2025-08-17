import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlayerForm.css";

function AddPlayerForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const playerData = {
      name,
      category,
      difficulty,
      date: new Date().toLocaleString(),
    };

    // Save to localStorage
    localStorage.setItem("currentPlayer", JSON.stringify(playerData));

    // Redirect to quiz
    navigate("/quiz/start");
  };

  const isFormIncomplete = !name || !category || !difficulty;

  return (
    <div className="form-container">
      <h2>Player Info</h2>
      <form onSubmit={handleSubmit}>
        <label>Player Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="History">History</option>
        </select>

        <label>Difficulty:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button type="submit" disabled={isFormIncomplete}>
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default AddPlayerForm;