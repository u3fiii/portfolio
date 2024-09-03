import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import "../styles/particles.scss";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                push: { quantity: 1 },
                repulse: { distance: 70, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#222023" },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                speed: 1,
              },
              number: {
                density: { enable: true },
                value: 1000,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 0.1, max: 2 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticlesComponent;
