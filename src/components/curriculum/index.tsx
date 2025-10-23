import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  BookOpen,
  CircleQuestionMark,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { AskQuestionDialog } from "./ask-question-dialog";
import { LeaderboardDialog } from "./leaderboard-dialog";
import { LeaderboardEntry } from "@/types";

interface CurriculumProps {
  leaderboard: LeaderboardEntry[];
  progress: number;
}

const Curriculum = ({ leaderboard = [], progress }: CurriculumProps) => {
  return (
    <section id="curriculum" className="curriculum flex gap-6 flex-wrap p-2">
      <Button variant="outline" className="rounded-full" size="icon-lg" asChild>
        <Link href="#materials">
          <BookOpen />
        </Link>
      </Button>
      <Button variant="outline" className="rounded-full" size="icon-lg" asChild>
        <Link href="#comments">
          <MessageCircle />
        </Link>
      </Button>
      <AskQuestionDialog
        storageKey="ask-question-draft"
        trigger={
          <Button variant="outline" className="rounded-full" size="icon-lg">
            <CircleQuestionMark />
          </Button>
        }
      />
      <LeaderboardDialog
        progress={progress}
        entries={leaderboard}
        trigger={
          <Button variant="outline" className="rounded-full" size="icon-lg">
            <Trophy />
          </Button>
        }
      />
    </section>
  );
};

export default Curriculum;
