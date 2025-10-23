interface ProgressBarProps {
  progress: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProgressBar = ({ progress, onChange }: ProgressBarProps) => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={progress}
      onChange={onChange}
      className="flex-1 min-w-0 accent-red-500 cursor-pointer"
      aria-label="Video progress"
    />
  );
};
