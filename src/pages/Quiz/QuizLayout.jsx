import Header from "./components/Header";
import Quiz from "./components/Quiz";
import "./Quiz.css";

function QuizLayout() {
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
