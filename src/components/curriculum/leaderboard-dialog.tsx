"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Leaderboard } from "@/components/curriculum/leaderboard";

import { getEncouragementByLevel, getLevelFromScore } from "@/lib/utils";
import { LeaderboardEntry } from "@/types";

interface LeaderboardDialogProps {
  trigger: React.ReactNode;
  entries: LeaderboardEntry[];
  progress: number;
}

export function LeaderboardDialog({
  trigger,
  entries,
  progress,
}: LeaderboardDialogProps) {
  const level = getLevelFromScore(progress);
  const { emoji, text } = getEncouragementByLevel(level);
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="lg:max-w-xl p-4! lg:p-8!">
        <DialogHeader>
          <DialogDescription className="text-center main-text">
            Course Name Shown Here
          </DialogDescription>
          <DialogTitle className="text-center main-text">
            Leader board
          </DialogTitle>
        </DialogHeader>
        <div className="flex arabic-text bg-gray-50 p-6 items-center gap-2">
          <span className="text-4xl">{emoji}</span>
          <p className="main-text">{text}</p>
        </div>
        <Leaderboard entries={entries} />
      </DialogContent>
    </Dialog>
  );
}
