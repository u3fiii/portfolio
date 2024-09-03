import Header from "./components/Header";

import BackgroundBlur from "./components/BackgroundBlur";
import Hero from "./components/Hero";
import ParticlesComponent from "./components/ParticlesComponent";
import CustomCursor from "./components/CustomCursor";

import "./styles/app.scss";
function App() {
  return (
    <div className="app">
      <BackgroundBlur />
      <CustomCursor />
      <ParticlesComponent />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
