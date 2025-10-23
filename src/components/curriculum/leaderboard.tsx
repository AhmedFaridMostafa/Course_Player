import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { getInitials } from "@/lib/utils";
import AvatarImage from "../AvatarImage";

interface LeaderboardEntryProps {
  rank: number;
  name: string;
  progress: number;
  avatar?: string;
}

interface LeaderboardProps {
  entries: LeaderboardEntryProps[];
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <Card className="w-full max-w-2xl bg-gray-50">
      <CardContent className="px-3 space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center gap-2 p-2 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <Badge
              variant="outline"
              className="w-6 h-6 rounded-full flex items-center justify-center font-semibold bg-blue-50 text-blue-700 border-blue-200"
            >
              {entry.rank}
            </Badge>

            <AvatarImage
              src={entry.avatar!}
              alt={entry.name}
              size={30}
              fallback={getInitials(entry.name)}
            />

            <span className="font-medium text-sm flex-1">{entry.name}</span>

            <div className="flex items-center gap-2 min-w-[160px]">
              <div className="w-28">
                <Progress value={entry.progress} className="h-2" />
              </div>
              <span className="text-sm font-medium text-muted-foreground w-12 text-right">
                {entry.progress}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
