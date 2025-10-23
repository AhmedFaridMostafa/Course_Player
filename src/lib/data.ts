import {
  QuizQuestion,
  TopicProps,
  Comment,
  LeaderboardEntry,
  CourseData,
} from "@/types";

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is React?",
    options: [
      { id: "a", text: "A JavaScript library for building user interfaces" },
      { id: "b", text: "A database management system" },
      { id: "c", text: "A CSS framework" },
      { id: "d", text: "A backend framework" },
    ],
    correctAnswer: "a",
  },
  {
    question: "What does JSX stand for?",
    options: [
      { id: "a", text: "JavaScript XML" },
      { id: "b", text: "Java Syntax Extension" },
      { id: "c", text: "JavaScript Extension" },
      { id: "d", text: "JSON XML" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Which hook is used for state management?",
    options: [
      { id: "a", text: "useEffect" },
      { id: "b", text: "useState" },
      { id: "c", text: "useContext" },
      { id: "d", text: "useReducer" },
    ],
    correctAnswer: "b",
  },
  {
    question: "What is the Virtual DOM in React?",
    options: [
      { id: "a", text: "A lightweight copy of the actual DOM" },
      { id: "b", text: "A CSS styling technique" },
      { id: "c", text: "A database for storing components" },
      { id: "d", text: "A type of React component" },
    ],
    correctAnswer: "a",
  },
  {
    question: "Which method is used to update state in a class component?",
    options: [
      { id: "a", text: "this.updateState()" },
      { id: "b", text: "this.setState()" },
      { id: "c", text: "this.changeState()" },
      { id: "d", text: "this.modifyState()" },
    ],
    correctAnswer: "b",
  },
];

const topics: TopicProps[] = [
  {
    id: "topic-1",
    title: "Course Introduction",
    timestamp: "Week 1-4",
    description:
      " Advanced storytelling techniques for writers personas, characters & plots",
    lessons: [
      { title: "Introduction", isLocked: false, type: "video", videoUrl: "" },
      {
        title: "Course Overview",
        isLocked: false,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Course Overview Quiz",
        isLocked: false,
        questions: 5,
        duration: "10 MINUTES",
        type: "quiz",
        quizQuestions,
      },
      {
        title: "Course Exercise / Reference Files",
        isLocked: false,
        type: "pdf",
        pdfUrl: "https://pdfobject.com/pdf/sample.pdf",
      },
      {
        title: "Code Editor Installation (Optional if you have one)",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Embedding PHP in HTML",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
    ],
  },
  {
    id: "topic-2",
    title: "JavaScript Language Basics",
    timestamp: "Week 5-8",
    description:
      "Advanced storytelling techniques for writers personas, characters & plots",
    lessons: [
      {
        title: "Defining Functions",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Function Parameters",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Return Values From Functions",
        isLocked: false,
        questions: 5,
        duration: "10 MINUTES",
        type: "quiz",
        quizQuestions,
      },
      {
        title: "Global Variable and Scope",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Newer Way Of Creating a Constant",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Constants",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
    ],
  },
  {
    id: "topic-3",
    title: "Components & Databinding",
    timestamp: "Week 5-8",
    description:
      "Advanced storytelling techniques for writers personas, characters & plots",
    lessons: [
      {
        title: "Defining Functions",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Function Parameters",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Return Values From Functions",
        isLocked: false,
        questions: 5,
        duration: "10 MINUTES",
        type: "quiz",
        quizQuestions,
      },
      {
        title: "Global Variable and Scope",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Newer Way Of Creating a Constant",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
      {
        title: "Constants",
        isLocked: true,
        type: "video",
        videoUrl: "",
      },
    ],
  },
];

const comments: Comment[] = [
  {
    id: 1,
    name: "Ahmed F.",
    text: "Great course so far! The explanations are very clear.",
    timestamp: "2 hours ago",
    avatar: "/user1-image.webp",
  },
  {
    id: 2,
    name: "Sara A.",
    text: "Very helpful examples, thank you!",
    timestamp: "5 hours ago",
    avatar: "/user2-image.webp",
  },
  {
    id: 3,
    name: "Mohamed K.",
    text: "When will we cover authentication?",
    timestamp: "1 day ago",
    avatar: "/user1-image.webp",
  },
  {
    id: 4,
    name: "Fatma S.",
    text: "The project structure explanation was perfect 👌",
    timestamp: "2 days ago",
    avatar: "/user2-image.webp",
  },
];

const encouragementMessages = [
  "عظيم يا صديقي! أداءك أفضل من 60% من باقي الطلبة 💪",
  "استمر، أنت تقترب من القمة 🚀",
  "شد حيلك، عايز أشوف اسمك في الليدر بورد 🔥",
  "ممتاز! أنت في الطريق الصحيح 🎯",
  "استمر في التقدم، أنت تقوم بعمل رائع 🌟",
  "أداءك أفضل من 63% من الطلبة 🎯",
  "أنت تقترب من النهاية، استمر! 🏆",
];

const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Ahmed Hassan",
    progress: 100,
    avatar: "/user1-image.webp",
  },
  {
    rank: 2,
    name: "Sara Mohamed",
    progress: 95,
    avatar: "/user2-image.webp",
  },
  {
    rank: 3,
    name: "Omar Ali",
    progress: 92,
    avatar: "/user3-image.webp",
  },
  {
    rank: 4,
    name: "Fatma Ahmed",
    progress: 88,
    avatar: "/user2-image.webp",
  },
  {
    rank: 5,
    name: "Youssef Said",
    progress: 85,
    avatar: "/user1-image.webp",
  },
];

export const data: CourseData[] = [
  {
    id: "course-details-2",
    name: "Starting SEO as your Home",
    instructor: "Edward Norton",
    duration: "3 weeks",
    lessons: 8,
    enrolled: 65,
    language: "English",
    description:
      "Learn Next.js 15 from scratch with modern React patterns and best practices",
    progress: Math.floor(Math.random() * 100) + 1,
    leaderboardRank: 12,
    totalStudents: 200,
    currentLevel: "Intermediate",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnail: "/api/placeholder/800/450",
    topics,
    comments,
    encouragementMessages,
    leaderboard,
  },
];
