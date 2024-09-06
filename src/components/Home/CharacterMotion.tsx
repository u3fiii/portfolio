import Lottie from "lottie-react"; // Import Lottie
import characterMotionAnimation from "../../assets/lottie/characterMotion.json"; // Adjust the path as necessary

const CharacterMotion = () => {
  return (
    <div className="character-motion">
      <Lottie
        className="character-lottie"
        animationData={characterMotionAnimation} // Use the imported Lottie animation
        loop={true} // Set to loop
      />
    </div>
  );
};

export default CharacterMotion;
