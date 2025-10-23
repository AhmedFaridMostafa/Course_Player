import { Play, Pause } from "lucide-react";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export const PlayPauseButton = ({
  isPlaying,
  onClick,
}: PlayPauseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? (
        <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
      ) : (
        <Play className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </button>
  );
};
