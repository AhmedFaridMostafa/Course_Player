import { LessonProps } from "@/types";
import { FileText, Lock, Clock, HelpCircle } from "lucide-react";

interface LessonComponentProps {
  lesson: LessonProps;
}

const Lesson = ({ lesson }: LessonComponentProps) => {
  const { title, isLocked, duration } = lesson;

  const getLessonIcon = () => {
    if (lesson.type === "quiz") {
      return (
        <HelpCircle size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
      );
    }
    if (lesson.type === "pdf") {
      return (
        <FileText size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
      );
    }
    return (
      <FileText size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
    );
  };

  return (
    <div
      role={isLocked ? "presentation" : "button"}
      tabIndex={isLocked ? -1 : 0}
      aria-label={`${title}${isLocked ? " (Locked)" : ""}`}
      aria-disabled={isLocked}
      className={`flex items-start justify-between py-3 px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        !isLocked
          ? "hover:bg-gray-50 cursor-pointer focus:bg-gray-50"
          : "cursor-not-allowed opacity-70"
      }`}
    >
      <div className="flex items-start gap-3">
        {getLessonIcon()}
        <span className="text-gray-700 text-sm leading-relaxed">{title}</span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 flex-1">
        {lesson.type === "quiz" && lesson.questions !== undefined && (
          <span className="text-teal-500 text-xs font-medium flex items-center gap-1">
            <HelpCircle size={12} />
            {lesson.questions} QUESTION{lesson.questions !== 1 ? "S" : ""}
          </span>
        )}
        {duration && (
          <span className="text-red-500 text-xs font-medium flex items-center gap-1">
            <Clock size={12} />
            {duration}
          </span>
        )}
        {isLocked && <Lock size={16} className="text-gray-400" />}
      </div>
    </div>
  );
};

export default Lesson;
