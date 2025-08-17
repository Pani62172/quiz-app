import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Placeholder components (we'll build these next)
import Hero from "./components/Hero";
import AddPlayerForm from "./components/AddPlayerForm";
import QuizEngine from "./components/QuizEngine";
import ScoreSummary from "./components/ScoreSummary";
import Leaderboard from "./components/Leaderboard";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      {/* Navbar will be visible on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/add-player" element={<AddPlayerForm />} />
        <Route path="/quiz/start" element={<QuizEngine />} />
        <Route path="/score" element={<ScoreSummary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
