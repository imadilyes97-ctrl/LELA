"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INTRO_SEEN_KEY = "lella_intro_seen";

export function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [state, setState] = useState<"loading" | "playing" | "skipping" | "done">("loading");
  const [showSkip, setShowSkip] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef(0);
  const startTimeRef = useRef<number>(0);

  const finish = useCallback(() => {
    if (state === "done") return;
    setState("done");
    try { sessionStorage.setItem(INTRO_SEEN_KEY, "true"); } catch {}
    setFadeOut(true);
    setTimeout(onFinish, 800);
  }, [onFinish, state]);

  const skip = useCallback(() => {
    if (state === "done") return;
    setState("skipping");
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = videoRef.current.duration;
    }
    finish();
  }, [finish, state]);

  useEffect(() => {
    // Check if already seen this session
    try {
      if (sessionStorage.getItem(INTRO_SEEN_KEY)) {
        onFinish();
        return;
      }
    } catch {}

    // Show skip button after 2s
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    // Loading timer (max 3s fallback for video load)
    const loadTimer = setTimeout(() => {
      if (state === "loading") {
        setState("playing");
        videoRef.current?.play().catch(() => {});
      }
    }, 3000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(loadTimer);
    };
  }, [onFinish, state]);

  // Progress tracking
  useEffect(() => {
    if (state !== "playing" && state !== "loading") return;
    const interval = setInterval(() => {
      if (videoRef.current && videoRef.current.duration) {
        const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        progressRef.current = pct;
        setProgress(pct);
        if (pct >= 95) finish();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [state, finish]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-navy-900 overflow-hidden"
        >
          {/* Video background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => {
              setState("playing");
              videoRef.current?.play().catch(() => {});
            }}
            onEnded={finish}
            onError={() => {
              // Fallback: if video fails, continue after a brief pause
              setTimeout(finish, 2000);
            }}
          >
            <source src="/videos/wmremove-transformed.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/80" />

          {/* Animated radial glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[600px] h-[600px] rounded-full bg-gradient-radial-gold opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            {/* LELLA logo/animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <motion.h1
                className="font-display text-[clamp(3rem,8vw,6rem)] text-ivory-50 tracking-tight mb-3"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(201,168,76,0.3)",
                    "0 0 40px rgba(201,168,76,0.5)",
                    "0 0 20px rgba(201,168,76,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                LELLA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-body text-sm md:text-base text-gold-400/80 tracking-[0.3em] uppercase"
              >
                L'Élégance des traditions algériennes
              </motion.p>
            </motion.div>

            {/* Loading progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48"
            >
              <div className="h-[2px] bg-ivory-50/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-gold rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Subtle loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1 }}
              className="absolute bottom-24 font-body text-[10px] text-ivory-400/50 uppercase tracking-[0.3em]"
            >
              {state === "loading" ? "Chargement..." : "Préparez-vous à rêver..."}
            </motion.p>
          </div>

          {/* Skip button */}
          <AnimatePresence>
            {showSkip && state !== "done" && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={skip}
                className="absolute bottom-12 right-8 md:right-12 z-20 px-5 py-2.5 rounded-full bg-ivory-50/10 border border-ivory-50/20 text-ivory-300 font-body text-xs uppercase tracking-[0.15em] hover:bg-ivory-50/20 hover:text-ivory-50 transition-all duration-300 backdrop-blur-sm"
              >
                Passer l'intro
              </motion.button>
            )}
          </AnimatePresence>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
