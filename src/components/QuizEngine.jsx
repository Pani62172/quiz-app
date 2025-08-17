import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions";
import "./QuizEngine.css";

function QuizEngine() {
  const [player, setPlayer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("currentPlayer"));
    if (!data) return navigate("/add-player");
    setPlayer(data);

    const loadedQuestions =
      questionsData[data.category]?.[data.difficulty] || [];
    setQuestions(loadedQuestions);
  }, []);

  // Timer logic
  useEffect(() => {
    if (!questions.length) return;

    if (timeLeft === 0) {
      nextQuestion();
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, questions]);

  const handleOptionClick = (option) => {
    if (selected) return;
    setSelected(option);

    setSelected(option);

// Delay nextQuestion to show feedback (correct/wrong)
  setTimeout(() => {
    const isCorrect = option === questions[currentQ].answer;
    nextQuestion(isCorrect);
     }, 1000);
  };

  const nextQuestion = (wasCorrect = false) => {
  if (wasCorrect) {
    setScore((prev) => prev + 1);
  }

  if (currentQ + 1 < questions.length) {
    setCurrentQ(currentQ + 1);
    setSelected(null);
    setTimeLeft(15);
  } else {
    finishQuiz(wasCorrect);
  }
};

  const finishQuiz = (wasCorrect) => {
  const finalScore = wasCorrect ? score + 1 : score;
  const totalTime = questions.length * 15 - timeLeft;

  const allScores = JSON.parse(localStorage.getItem("scoreHistory") || "[]");

  const newScore = {
    name: player.name,
    score: finalScore,
    total: questions.length,
    date: new Date().toLocaleString(),
    time: totalTime,
  };

  localStorage.setItem("scoreHistory", JSON.stringify([...allScores, newScore]));
  navigate("/score");
};

  if (!questions.length) return <h2>Loading questions...</h2>;

  const currentQuestion = questions[currentQ];
  const isCorrect = selected === currentQuestion.answer;

  return (
  <div className="quiz-container">
    <div className="quiz-box">
      <div className="quiz-header">
        <h3>Quiz Application</h3>
        <div className="timer">⏱ {timeLeft}s</div>
      </div>

      <div className="question">
        <h2>{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((opt) => (
            <button
              key={opt}
              className={`option ${selected ? (
                opt === currentQuestion.answer
                  ? "correct"
                  : opt === selected ? "wrong" : ""
              ) : ""}`}
              onClick={() => handleOptionClick(opt)}
              disabled={!!selected}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="progress-info">
        {currentQ + 1} of {questions.length} Questions
      </div>
    </div>
  </div>
);
}

export default QuizEngine;