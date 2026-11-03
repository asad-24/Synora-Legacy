"use client";

import { useState } from "react";
import { Pause, Play, Sparkle } from "lucide-react";

const topics = [
  "Financial education",
  "Family protection",
  "Retirement planning",
  "Living benefits",
  "Legacy planning",
  "Education first",
];
export function FocusMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className={`focus-marquee ${paused ? "is-paused" : ""}`}
      role="region"
      aria-label="Our areas of focus"
    >
      <div className="focus-marquee-window">
        <div className="focus-marquee-track">
          {[0, 1].map((copy) => (
            <div
              className="focus-marquee-sequence"
              key={copy}
              aria-hidden={copy > 0}
            >
              {topics.map((topic) => (
                <span key={topic}>
                  <Sparkle size={15} aria-hidden="true" />
                  {topic}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="marquee-toggle"
        aria-label={paused ? "Play focus animation" : "Pause focus animation"}
        onClick={() => setPaused(!paused)}
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </div>
  );
}
