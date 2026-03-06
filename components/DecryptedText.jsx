"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "motion/react";

// Styles object
const styles = {
  wrapper: {
    display: "inline-block",
    whiteSpace: "pre-wrap",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
  },
};

// Default characters
const DEFAULT_CHARACTERS = "QuraibaSuperSecretHurayra";

export default function DecryptedText({
  text,
  speed = 20,
  maxIterations = 12,
  sequential = true,
  revealDirection = "start",
  characters = DEFAULT_CHARACTERS,
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-60",
  animateOn = "view", // "view" or "hover"
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const [iteration, setIteration] = useState(0);
  
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Shuffle text function
  const shuffleText = useCallback((originalText, revealed) => {
    return originalText
      .split("")
      .map((char, i) => {
        // Preserve spaces
        if (char === " ") return " ";
        // If character is revealed, show original
        if (revealed.has(i)) return originalText[i];
        // Otherwise show random character
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");
  }, [characters]);

  // Start scrambling effect
  const startScrambling = useCallback(() => {
    cleanup();
    setIsScrambling(true);
    setRevealedIndices(new Set());
    setIteration(0);

    let currentIteration = 0;
    
    intervalRef.current = setInterval(() => {
      setRevealedIndices((prev) => {
        // Sequential reveal logic
        if (prev.size < text.length && currentIteration < maxIterations) {
          const nextSet = new Set(prev);
          
          if (revealDirection === "start") {
            // Reveal from start
            for (let i = 0; i <= prev.size; i++) {
              if (text[i] !== " ") nextSet.add(i);
            }
          } else if (revealDirection === "end") {
            // Reveal from end
            const startIndex = text.length - 1 - prev.size;
            for (let i = startIndex; i < text.length; i++) {
              if (text[i] !== " ") nextSet.add(i);
            }
          } else if (revealDirection === "center") {
            // Reveal from center
            const center = Math.floor(text.length / 2);
            const offset = Math.floor(prev.size / 2);
            for (let i = center - offset; i <= center + offset; i++) {
              if (i >= 0 && i < text.length && text[i] !== " ") {
                nextSet.add(i);
              }
            }
          }
          
          setDisplayText(shuffleText(text, nextSet));
          currentIteration++;
          return nextSet;
        } else {
          cleanup();
          setIsScrambling(false);
          setDisplayText(text);
          return prev;
        }
      });
    }, speed);
  }, [text, speed, revealDirection, maxIterations, shuffleText, cleanup]);

  // Handle view animation trigger
  useEffect(() => {
    if (animateOn === "view" && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startScrambling();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, startScrambling]);

  // Handle hover events
  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      startScrambling();
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover") {
      cleanup();
      setIsScrambling(false);
      setDisplayText(text);
      setRevealedIndices(new Set());
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return (
    <motion.span
      ref={containerRef}
      className={parentClassName}
      style={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={animateOn === "hover" ? { scale: 1.05 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Screen reader only text for accessibility */}
      <span style={styles.srOnly}>{text}</span>
      
      {/* Visual scrambled text */}
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => (
          <span
            key={index}
            className={
              revealedIndices.has(index) || !isScrambling
                ? className
                : encryptedClassName
            }
          >
            {char}
          </span>
        ))}
      </span>
    </motion.span>
  );
}