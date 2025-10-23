import { VolumeX, Volume2 } from "lucide-react";

interface VolumeControlProps {
  volume: number;
  muted: boolean;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMuteToggle: () => void;
}

export const VolumeControl = ({
  volume,
  muted,
  onVolumeChange,
  onMuteToggle,
}: VolumeControlProps) => {
  return (
    <>
      {/* Desktop Volume Control */}
      <div className="hidden sm:flex items-center gap-2 bg-white/10 px-2 py-1 rounded-full">
        <button
          onClick={onMuteToggle}
          className="text-white hover:text-white/80 transition-colors"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted || volume === 0 ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={muted ? 0 : volume}
          onChange={onVolumeChange}
          className="w-16 lg:w-20 accent-white cursor-pointer"
          aria-label="Volume"
        />
      </div>

      {/* Mobile Mute Toggle */}
      <button
        onClick={onMuteToggle}
        className="sm:hidden p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted || volume === 0 ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </>
  );
};
