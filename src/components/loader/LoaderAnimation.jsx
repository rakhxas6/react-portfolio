import React, { useEffect, useState } from "react";
import "./LoaderAnimation.css";

const greetings = [
  "शुभदिनम्", // 🌟 Sanskrit
  "नमस्ते", // Nepali / Hindi
  "Hello",
  "Hallo", // German
  "Bonjour", // French
  "Hola", // Spanish
  "Ciao", // Italian
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "مرحبا", // Arabic
  "Привет", // Russian
  "你好", // Chinese
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "வணக்கம்", // Tamil
  "สวัสดี", // Thai
  "હેલો", // Gujarati
  "שלום", // Hebrew
  "Γειά σου", // Greek
  "Selam", // Turkish
];

export default function LoaderAnimation({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(interval);
          setIsFadingOut(true);
          setTimeout(() => {
            if (onFinish) onFinish(); // after fade-out
          }, 300); // fade-out duration must match CSS
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loader-container ${isFadingOut ? "fade-out" : ""}`}>
      <div className="loader">
        <span className="greeting-text">{greetings[index]}</span>
      </div>
    </div>
  );
}
