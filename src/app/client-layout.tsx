"use client";

import { useState, useCallback } from "react";
import { VideoIntro } from "@/components/intro/video-intro";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  const handleIntroFinish = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      {/* Intégration vidéo — toujours montée, visible ou non */}
      <VideoIntro onFinish={handleIntroFinish} />

      {/* Contenu principal — invisible tant que l'intro n'a pas fini */}
      <div
        className={`flex-1 flex flex-col transition-all duration-1000 ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none overflow-hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
}
