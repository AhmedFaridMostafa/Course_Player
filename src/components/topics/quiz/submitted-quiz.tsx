import { CheckCircle, Trophy, XCircle } from "lucide-react";
import { ResetQuizButton } from "./reset-quiz-button";

const SubmittedQuiz = ({
  score,
  questionsLength,
}: {
  score: number;
  questionsLength: number;
}) => {
  const percentage = (score / questionsLength) * 100;
  const isPassed = percentage >= 60;

  return (
    <div className="w-full py-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-6 text-center">
          <div
            className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
              isPassed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <Trophy
              className={`w-10 h-10 ${isPassed ? "text-green-600" : "text-red-600"}`}
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isPassed ? "Congratulations!" : "Keep Practicing!"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isPassed ? "You passed the quiz!" : "You can do better next time!"}
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 mb-5">
            <div className="text-4xl font-bold text-indigo-600 mb-1">
              {score}/{questionsLength}
            </div>
            <div className="text-base text-gray-700 font-semibold">
              {percentage.toFixed(0)}% Score
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-700 text-sm">
                  Correct Answers
                </span>
              </div>
              <span className="font-bold text-green-600">{score}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-gray-700 text-sm">
                  Wrong Answers
                </span>
              </div>
              <span className="font-bold text-red-600">
                {questionsLength - score}
              </span>
            </div>
          </div>

          <ResetQuizButton />
        </div>
      </div>
    </div>
  );
};

export default SubmittedQuiz;
