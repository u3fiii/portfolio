import { useState, useEffect } from "react";

import "../styles/typing-effect.scss";

const TypingEffect = () => {
  const phrases = [
    "Product Designer",
    "Front-End Developer",
    "Motion Designer",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const pauseDuration = 1; // Pause after completing a phrase

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting characters
        setCurrentPhrase(phrases[phraseIndex].slice(0, charIndex));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false); // Switch to typing mode
          setTimeout(() => {
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next phrase
          }, pauseDuration);
        }
      } else {
        // Typing characters
        setCurrentPhrase(phrases[phraseIndex].slice(0, charIndex));
        setCharIndex((prev) => prev + 1);

        if (charIndex === phrases[phraseIndex].length) {
          setIsDeleting(true); // Switch to deleting mode
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  useEffect(() => {
    // Reset charIndex when switching phrases
    if (!isDeleting) {
      setCharIndex(0);
    }
  }, [phraseIndex, isDeleting]);

  return (
    <div className="typing-effect">
      <h1>{currentPhrase}</h1>
      <span className="typing-cursor">|</span>
    </div>
  );
};

export default TypingEffect;
