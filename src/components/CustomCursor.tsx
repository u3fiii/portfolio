import { useEffect, useState } from "react";
import "../styles/custom-cursor.scss"; // Import CSS for styling

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [largeCursorPosition, setLargeCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);
    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300); // Reset click state after animation
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const moveLargeCursor = () => {
      setLargeCursorPosition((prevPosition) => {
        const x = prevPosition.x + (cursorPosition.x - prevPosition.x) * 0.25;
        const y = prevPosition.y + (cursorPosition.y - prevPosition.y) * 0.25;
        return { x, y };
      });

      requestAnimationFrame(moveLargeCursor);
    };

    const animationFrameId = requestAnimationFrame(moveLargeCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPosition]);

  return (
    <>
      {cursorVisible && (
        <>
          <div
            className={`cursor ${isClicked ? "clicked" : ""}`}
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          />
          <div
            className={`cursor-large ${isClicked ? "clicked" : ""}`}
            style={{
              left: `${largeCursorPosition.x}px`,
              top: `${largeCursorPosition.y}px`,
            }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
