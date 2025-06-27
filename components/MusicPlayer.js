"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react"
import YouTube from "react-youtube"

const SONGS = [
  {
    trackName: "Samay Samjhayega",
    youtubeId: "6ZwwapPikyQ", 
  },
  {
    trackName: "Tum Prem ho",
    youtubeId: "Feoea8FQTI0",
  },
  {
    trackName: "Namo Namo",
    youtubeId: "dx4Teh-nv3A",
  }
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [volume, setVolume] = useState(15) 
  const playerRef = useRef(null) 

  const onReady = event => {
    playerRef.current = event.target 
    event.target.setVolume(volume)
    if (isPlaying) event.target.playVideo()
    else event.target.pauseVideo()
    if (isMuted) event.target.mute()
    else event.target.unMute()
  }

 
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(volume)
    }
  }, [volume])

  
  useEffect(() => {
    if (playerRef.current) {
      if (isMuted) playerRef.current.mute()
      else playerRef.current.unMute()
    }
  }, [isMuted])

  
  useEffect(() => {
    if (
      playerRef.current &&
      typeof playerRef.current.playVideo === "function"
    ) {
      playerRef.current.playVideo()
      setIsPlaying(true)
    }
  }, [currentSongIndex])

  const onPlayPause = () => {
    setIsPlaying(prev => {
      const next = !prev
      if (playerRef.current && typeof playerRef.current.playVideo === "function" && typeof playerRef.current.pauseVideo === "function") {
        if (next) playerRef.current.playVideo()
        else playerRef.current.pauseVideo()
      }
      return next
    })
  }

  const playNext = () => setCurrentSongIndex(i => (i < SONGS.length - 1 ? i + 1 : 0))
  const playPrev = () => setCurrentSongIndex(i => (i > 0 ? i - 1 : SONGS.length - 1))

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
      <YouTube
        videoId={SONGS[currentSongIndex].youtubeId}
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 1,
          },
        }}
        onReady={onReady}
        onPlay={e => setIsPlaying(true)}
        onPause={e => setIsPlaying(false)}
        onEnd={playNext}
      />
    </motion.div>
  )
}
