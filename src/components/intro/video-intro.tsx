"use client";

import { useState, useEffect, useRef } from "react";

/**
 * VideoIntro — Splash screen immédiat.
 *
 * - s'affiche INSTANTANÉMENT dès le chargement du JS
 * - la vidéo tourne en plein écran en boucle en fond
 * - l'overlay LELLA + glow + loading bar
 * - après 5 secondes → fade out → landing page
 * - ne se joue qu'une fois par session (sessionStorage)
 * - skip button après 2s
 * - fallback auto si la vidéo charge pas (timeout 5s)
 */

const INTRO_SEEN_KEY = "lella_intro_v2";
const INTRO_DURATION = 5000; // 5 secondes

export function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    // Ne pas rejouer si déjà vu cette session
    try {
      if (sessionStorage.getItem(INTRO_SEEN_KEY)) {
        onFinish();
        return;
      }
    } catch {}

    // Timeline stricte :
    // T0 → tout s'affiche immédiatement
    // T2s → skip bouton apparaît
    // T5s → fin de l'intro

    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    const finishTimer = setTimeout(() => {
      if (finishedRef.current) return;
      endIntro();
    }, INTRO_DURATION);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(finishTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Progression
  useEffect(() => {
    if (!visible) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / INTRO_DURATION) * 100, 100);
      setProgress(pct);
    }, 50);
    return () => clearInterval(interval);
  }, [visible]);

  function endIntro() {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setVisible(false);
    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    } catch {}
    // Pause la vidéo si elle tourne encore
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Délai pour le fade out CSS
    setTimeout(onFinish, 600);
  }

  function handleSkip() {
    endIntro();
  }

  function handleVideoEnded() {
    endIntro();
  }

  // Fallback si vidéo jamais prête après X temps
  useEffect(() => {
    if (videoReady) return;
    const fallback = setTimeout(() => {
      setVideoReady(true);
    }, 2000);
    return () => clearTimeout(fallback);
  }, [videoReady]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-navy-900 overflow-hidden transition-opacity duration-[600ms] ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* VIDEO PLEIN ÉCRAN — Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        onCanPlay={() => setVideoReady(true)}
        onEnded={handleVideoEnded}
        onError={() => setVideoReady(true)}
      >
        <source src="/videos/wmremove-transformed.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/40 to-navy-900/80" />

      {/* Glow radial animé */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: "intro-glow 4s ease-in-out infinite" }}
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gold-500/20 blur-[120px]" />
      </div>

      {/* Contenu central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center" style={{ animation: "intro-fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards" }}>
          <h1
            className="font-display text-[clamp(3rem,8vw,6rem)] text-ivory-50 tracking-tight mb-3"
            style={{
              animation: "intro-glow-text 3s ease-in-out infinite",
            }}
          >
            LELLA
          </h1>
          <p
            className="font-body text-sm md:text-base text-gold-400/80 tracking-[0.3em] uppercase"
            style={{ animation: "intro-fade-up 1s 0.5s both" }}
          >
            L'Élégance des traditions algériennes
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48"
          style={{ animation: "intro-fade-in 1s 0.8s both" }}
        >
          <div className="h-[2px] bg-ivory-50/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold-500 to-gold-300 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p
          className="absolute bottom-24 font-body text-[10px] text-ivory-400/50 uppercase tracking-[0.3em]"
          style={{ animation: "intro-fade-in 1s 1s both" }}
        >
          Préparez-vous à rêver...
        </p>
      </div>

      {/* Skip button */}
      {showSkip && (
        <button
          onClick={handleSkip}
          className="absolute bottom-12 right-8 md:right-12 z-20 px-5 py-2.5 rounded-full bg-ivory-50/10 border border-ivory-50/20 text-ivory-300 font-body text-xs uppercase tracking-[0.15em] hover:bg-ivory-50/20 hover:text-ivory-50 transition-all duration-300 backdrop-blur-sm"
          style={{ animation: "intro-fade-up 0.3s both" }}
        >
          Passer l'intro
        </button>
      )}

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />

      {/* Keyframes injectés inline */}
      <style>{`
        @keyframes intro-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes intro-fade-in {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes intro-fade-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes intro-glow-text {
          0%, 100% { text-shadow: 0 0 20px rgba(201,168,76,0.3); }
          50% { text-shadow: 0 0 40px rgba(201,168,76,0.5), 0 0 60px rgba(201,168,76,0.2); }
        }
      `}</style>
    </div>
  );
}
