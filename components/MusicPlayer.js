"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react"

const SONGS = [
  {
    trackName: "Samay Samjhayega",
    src: "/Samay Samjhayega.mp4",
  },
  {
    trackName: "Tum Prem ho",
    src: "/Tum Prem Ho.mp4",
  },
  {
    trackName: "Namo Namo",
    src: "/Namo Namo.mp4",
  }
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [volume, setVolume] = useState(15)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      if (isPlaying) {
        audioRef.current.play()
      }
    }
    // eslint-disable-next-line
  }, [currentSongIndex])

  const onPlayPause = () => {
    setIsPlaying(prev => {
      const next = !prev
      if (audioRef.current) {
        if (next) audioRef.current.play()
        else audioRef.current.pause()
      }
      return next
    })
  }

  const playNext = () => {
    setCurrentSongIndex(i => {
      const nextIndex = i < SONGS.length - 1 ? i + 1 : 0
      return nextIndex
    })
    setIsPlaying(true)
  }

  const playPrev = () => {
    setCurrentSongIndex(i => {
      const prevIndex = i > 0 ? i - 1 : SONGS.length - 1
      return prevIndex
    })
    setIsPlaying(true)
  }

  const handleEnded = () => {
    playNext()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-20 right-4 z-50 sm:block hidden"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-pink-100 min-w-[360px]">
        <div className="flex items-center space-x-2">
          <button onClick={playPrev} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-pink-500" title="Previous">
            <SkipBack className="w-4 h-4" />
          </button>
          <button onClick={onPlayPause} className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white">
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <button onClick={playNext} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-pink-500" title="Next">
            <SkipForward className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMuted(m => !m)}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-pink-500"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            className="w-20 accent-pink-400"
            title="Volume"
            disabled={isMuted}
          />
          <span className="text-base font-semibold text-gray-600 pr-2 truncate max-w-[120px] block">
            {SONGS[currentSongIndex]?.trackName || "Unknown"}
          </span>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={SONGS[currentSongIndex].src}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        autoPlay={isPlaying}
        className="hidden"
      />
    </motion.div>
  )
}
