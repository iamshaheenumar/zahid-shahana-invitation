"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Floating music button for the Friends Invite — a small spinning "record"
 * in the dusty-rose palette. Starts playing the moment the intro cover is
 * opened (still inside the user's tap gesture, so autoplay is allowed).
 */
export default function FriendsMusicToggle({ autoPlay = false }: { autoPlay?: boolean }) {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const discRef = useRef<HTMLSpanElement>(null);

  const play = () => {
    const a = audioRef.current;
    if (a) {
      if (!a.getAttribute("src")) a.setAttribute("src", "/assets/friends-music.mp3");
      a.volume = 0.45;
      a.play().catch(() => {});
    }
    if (discRef.current) discRef.current.style.animationPlayState = "running";
    setOn(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    if (discRef.current) discRef.current.style.animationPlayState = "paused";
    setOn(false);
  };

  const toggle = () => (on ? pause() : play());

  useEffect(() => {
    if (autoPlay && !on) play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay]);

  return (
    <>
      <audio ref={audioRef} loop />
      <button
        onClick={toggle}
        aria-label="Toggle music"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 90,
          width: 52,
          height: 52,
          borderRadius: "50%",
          border: "none",
          background: "#fdf6f3",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 22px rgba(120,74,80,0.20)",
        }}
      >
        <span
          ref={discRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, #fdf6f3 0 26%, #b07681 27% 32%, #fdf6f3 33% 100%)",
            border: "2px solid #b07681",
            animation: "frSpin 3s linear infinite",
            animationPlayState: "paused",
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#b07681" }} />
        </span>
      </button>
    </>
  );
}
