"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";

interface QuizState {
  currentQuestion: number;
  selectedAnswers: Record<number, string>;
  timeLeft: number;
  isSubmitted: boolean;
  score: number;
}

type QuizAction =
  | { type: "SET_CURRENT_QUESTION"; payload: number }
  | {
      type: "SELECT_ANSWER";
      payload: { questionIndex: number; answerId: string };
    }
  | { type: "DECREMENT_TIME" }
  | { type: "SUBMIT_QUIZ"; payload: number }
  | { type: "RETAKE_QUIZ" }
  | { type: "GO_TO_PREVIOUS_QUESTION" }
  | { type: "GO_TO_NEXT_QUESTION" }
  | { type: "RESET_QUIZ" };

interface QuizContextType {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const initialState: QuizState = {
  currentQuestion: 0,
  selectedAnswers: {},
  timeLeft: 600, // 10:00 in seconds
  isSubmitted: false,
  score: 0,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload,
      };

    case "SELECT_ANSWER":
      return {
        ...state,
        selectedAnswers: {
          ...state.selectedAnswers,
          [action.payload.questionIndex]: action.payload.answerId,
        },
      };

    case "DECREMENT_TIME":
      return {
        ...state,
        timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
      };

    case "SUBMIT_QUIZ":
      return {
        ...state,
        score: action.payload,
        isSubmitted: true,
      };

    case "RETAKE_QUIZ":
      return {
        ...initialState,
      };

    case "GO_TO_PREVIOUS_QUESTION":
      return {
        ...state,
        currentQuestion:
          state.currentQuestion > 0 ? state.currentQuestion - 1 : 0,
      };

    case "GO_TO_NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case "RESET_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
