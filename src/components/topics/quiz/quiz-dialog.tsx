"use client";
import { useEffect } from "react";
import { QuizQuestion } from "@/types";
import { useQuiz } from "@/contexts/quiz-context";
import SubmittedQuiz from "./submitted-quiz";
import QuizHeader from "./quiz-header";
import QuizNavigation from "./quiz-navigation";
import QuizCard from "./quiz-card";

interface QuizPopupProps {
  quizQuestions: QuizQuestion[];
}

const QuizPopup = ({ quizQuestions }: QuizPopupProps) => {
  const { state, dispatch } = useQuiz();
  const { currentQuestion, selectedAnswers, isSubmitted, score } = state;

  useEffect(() => {
    dispatch({ type: "RESET_QUIZ" });
  }, [dispatch]);

  // Safety check for empty quiz questions
  if (!quizQuestions || quizQuestions.length === 0) {
    return (
      <div className="w-full py-8 text-center">
        <p className="text-gray-600">No quiz questions available.</p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <SubmittedQuiz score={score} questionsLength={quizQuestions.length} />
    );
  }

  const selectedOption = selectedAnswers[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto w-">
      {/* Header */}
      <QuizHeader
        currentQuestion={currentQuestion}
        quizQuestions={quizQuestions}
      />

      {/* Question Navigation */}
      <QuizNavigation
        quizQuestions={quizQuestions}
        currentQuestion={currentQuestion}
      />

      {/* Quiz Card */}
      <QuizCard quizQuestions={quizQuestions} selectedOption={selectedOption} />
    </div>
  );
};

export default QuizPopup;
