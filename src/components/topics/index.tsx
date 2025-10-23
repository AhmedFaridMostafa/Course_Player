import React from "react";

import CourseTopics from "./course-topics";
import ProgressIndicator from "./progress-bar";
import CourseTopicsDesktop from "./course-topics-desktop";
import { TopicProps } from "@/types";

interface TopicsProps {
  topics: TopicProps[];
  progress?: number;
}

const Topics = ({ topics, progress = 60 }: TopicsProps) => {
  return (
    <section
      id="topics"
      className="course-topics"
      aria-labelledby="topics-heading"
    >
      <header className="space-y-3">
        <h2
          id="topics-heading"
          className="text-3xl font-semibold text-gray-900"
        >
          Topics for This Course
        </h2>
        {/* Progress bar */}
        <ProgressIndicator progress={progress} />
      </header>
      <CourseTopics className="lg:hidden" topics={topics} />
      <CourseTopicsDesktop className="lg:block hidden" topics={topics} />
    </section>
  );
};

export default Topics;
