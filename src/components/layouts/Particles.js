import React, { memo } from "react";
import Particles from "react-tsparticles";
import { background } from "../../profile";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="particle">
      {background.type === "Snow" && (
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 15,
                density: {
                  enable: false,
                },
              },
              color: {
                value: "#FFFFFF",
              },
              size: {
                value: 10,
                random: true,
              },
              move: {
                direction: "bottom",
                out_mode: "out",
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "remove",
                },
              },
              modes: {
                remove: {
                  particles_nb: 5,
                },
              },
            },
          }}
        />
      )}
      {background.type === "Particle" && (
        <Particles
          init={particlesInit}
          options={{
            fpsLimit: 60,
            particles: {
              collisions: {
                enable: true,
              },
              number: {
                value: 15,
                density: {
                  enable: false,
                },
              },
              color: "#000000",
              size: {
                value: 5,
                random: true,
              },
              line_linked: {
                enable: true,
                color: "#000000",
              },
              move: {
                bounce: false,
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 1,
                straight: false,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 6,
                  opacity: 0.4,
                },
                push: {
                  particles_nb: 5,
                },
              },
              detectRetina: true,
            },
          }}
        />
      )}
    </div>
  );
};

export default memo(ParticlesBackground);
