"use client";

import { useRef, useState } from "react";
import { PlayPauseButton } from "./controls/play-pause-button";
import { ProgressBar } from "./controls/progress-bar";
import { VolumeControl } from "./controls/volume-control";
import { WideButton } from "./controls/wide-button";
import { FullscreenButton } from "./controls/fullscreen-button";
import { InitialPlayButton } from "./controls/initial-play-button";

interface CoursePlayerProps {
  src: string;
  poster: string;
}

const CoursePlayer = ({ src, poster }: CoursePlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [wideVideo, setWideVideo] = useState(false);

  // Handle play/pause
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const current = (video.currentTime / video.duration) * 100;
    setProgress(current);
  };

  // Seek to specific time
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const value = Number(e.target.value);
    video.currentTime = (video.duration * value) / 100;
    setProgress(value);
  };

  // Fullscreen toggle
  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Toggle wide video mode
  const handleWide = () => {
    setWideVideo((prev) => !prev);
  };

  // Volume control
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
      setMuted(false);
    }
  };

  // Mute toggle
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !muted;
    setMuted(newMuted);
    video.muted = newMuted;
  };

  return (
    <section
      id="course-player"
      className={`course-player transition-all duration-300 ${
        isPlaying ? "sticky top-0 z-50 lg:static" : ""
      } ${wideVideo ? "wide-video" : ""}`}
    >
      <div
        ref={containerRef}
        className="relative w-full bg-black overflow-hidden rounded-2xl aspect-video"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover cursor-pointer"
          onTimeUpdate={handleTimeUpdate}
          onClick={handlePlayPause}
        />

        {/* Initial Play Button */}
        {!isPlaying && progress === 0 && (
          <InitialPlayButton onClick={handlePlayPause} />
        )}

        {/* Custom Control Bar */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white flex items-center justify-between gap-2 px-3 py-3 sm:px-4 sm:py-4 backdrop-blur-sm transition-opacity duration-300">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <PlayPauseButton
                onClick={handlePlayPause}
                isPlaying={isPlaying}
              />
              <ProgressBar onChange={handleSeek} progress={progress} />
            </div>

            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <VolumeControl
                muted={muted}
                onMuteToggle={toggleMute}
                onVolumeChange={handleVolumeChange}
                volume={volume}
              />

              <WideButton wideVideo={wideVideo} onClick={handleWide} />

              <FullscreenButton onClick={handleFullscreen} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursePlayer;
