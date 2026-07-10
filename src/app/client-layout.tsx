"use client";

import { useState, useCallback } from "react";
import { VideoIntro } from "@/components/intro/video-intro";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [introFinished, setIntroFinished] = useState(false);

  const handleIntroFinish = useCallback(() => {
    setIntroFinished(true);
  }, []);

  return (
    <>
      {/* Video Intro — shows before main content */}
      {!introFinished && <VideoIntro onFinish={handleIntroFinish} />}

      {/* Main content — fades in after intro */}
      <div
        className={`flex-1 flex flex-col transition-opacity duration-1000 ${
          introFinished ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
