import Header from "./components/Header";
import { useEffect } from "react";
import Quiz from "./components/Quiz";
import "./Quiz.css";

function QuizLayout() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);
  return (
    <div id="quiz-container">
      <Header />
      <main>
        <Quiz />;
      </main>
    </div>
  );
}

export default QuizLayout;
