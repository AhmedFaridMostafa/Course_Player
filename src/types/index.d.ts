export interface Comment {
  id: number;
  name: string;
  text: string;
  timestamp: string;
  avatar: string;
}

interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  correctAnswer: string;
}

export interface BaseLesson {
  title: string;
  isLocked: boolean;
  duration?: string;
}

export interface VideoLesson extends BaseLesson {
  type: "video";
  videoUrl: string;
  thumbnail?: string;
}

export interface PdfLesson extends BaseLesson {
  type: "pdf";
  pdfUrl: string;
}

export interface QuizLesson extends BaseLesson {
  type: "quiz";
  questions: number;
  quizQuestions: QuizQuestion[];
}

export interface BasicLesson extends BaseLesson {
  type?: never;
}

export type LessonProps = VideoLesson | PdfLesson | QuizLesson | BasicLesson;

export interface TopicProps {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  lessons: LessonProps[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  progress: number;
  avatar?: string;
}

export interface CourseData {
  id: string;
  name: string;
  instructor: string;
  duration: string;
  lessons: number;
  enrolled: number;
  language: string;
  description: string;
  progress: number;
  leaderboardRank: number;
  totalStudents: number;
  currentLevel: string;
  videoUrl: string;
  thumbnail: string;
  topics: TopicProps[];
  comments: Comment[];
  encouragementMessages: string[];
  leaderboard: LeaderboardEntry[];
}
