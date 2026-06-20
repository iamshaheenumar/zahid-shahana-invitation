import { useEffect, useRef, useState } from "react";

export default function MusicToggle({ autoPlay = false }: { autoPlay?: boolean }) {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const discRef = useRef<HTMLSpanElement>(null);

  const play = () => {
    const a = audioRef.current;
    if (a) {
      if (!a.getAttribute("src")) a.setAttribute("src", "/assets/bg-music.mp3");
      a.volume = 0.5;
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

  // Start the music the moment the card is revealed. The reveal is driven by a
  // tap, so we're still inside a fresh user gesture and autoplay is allowed.
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
          bottom: 22,
          right: 22,
          zIndex: 50,
          width: 54,
          height: 54,
          borderRadius: "50%",
          border: "1px solid rgba(201,162,75,0.5)",
          background: "rgba(14,20,17,0.85)",
          backdropFilter: "blur(6px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <span
          ref={discRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, #1b251f 0 30%, #c9a24b 31% 34%, #1b251f 35% 100%)",
            border: "1px solid #c9a24b",
            animation: "zsSpin 4s linear infinite",
            animationPlayState: "paused",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#c9a24b",
            }}
          />
        </span>
      </button>
    </>
  );
}
