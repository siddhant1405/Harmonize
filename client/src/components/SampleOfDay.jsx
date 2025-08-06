import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const SampleOfDay = ({
  audioUrl,
  genre,
  bpm,
  keySignature,
  uploader,
}) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (waveformRef.current && audioUrl) {
     wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#c1c1c1ff",    // Blue for unplayed waveform
      progressColor: "#1c47a4ff", // White for played (progress) waveform
      backgroundColor: "transparent",
      height: 80,
      barWidth: 3,
      barGap: 1,
      responsive: true,
      url: audioUrl,
      cursorColor: "#60A5FA",
      cursorWidth: 2,
    });


      wavesurferRef.current.on('play', () => setIsPlaying(true));
      wavesurferRef.current.on('pause', () => setIsPlaying(false));
      wavesurferRef.current.on('ready', () => {
        setDuration(wavesurferRef.current.getDuration());
      });
      wavesurferRef.current.on('timeupdate', (time) => {
        setCurrentTime(time);
      });

      return () => wavesurferRef.current && wavesurferRef.current.destroy();
    }
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold" data-aos="fade-up">
            Sample of the Day
          </h2>
        </div>

        {/* Main Player Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-blue-400/30 rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* Artist info with metadata (replaces previous action buttons) */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {uploader.replace('@', '').charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="text-white font-semibold text-lg">{uploader}</div>
                <div className="text-gray-400 text-sm">Producer</div>
              </div>
            </div>
            {/* Metadata */}
            <div className="flex gap-8 text-white font-semibold text-lg justify-center">
              <div className="flex flex-col items-center">
                <span className="text-blue-300 text-xs uppercase">BPM</span>
                <span>{bpm}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-blue-300 text-xs uppercase">Key</span>
                <span>{keySignature}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-blue-300 text-xs uppercase">Genre</span>
                <span>{genre}</span>
              </div>
            </div>
          </div>

          {/* Waveform Container */}
          <div className="bg-black/20 rounded-2xl p-6 mb-6 border border-blue-500/20">
            <div ref={waveformRef} className="w-full"></div>
            {/* Time Display */}
            <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Skip Back */}
            <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-105">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            {/* Main Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/25 group"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {isPlaying ? (
                <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            {/* Skip Forward */}
            <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-105">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleOfDay;
