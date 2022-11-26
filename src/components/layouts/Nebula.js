import { ReactNebula } from "@flodlc/nebula";

const Nebula = ({ isDarkMode }) => {
  return (
    <ReactNebula
      config={
        isDarkMode
          ? {
              starsCount: 400,
              starsColor: "#FFFFFF",
              starsRotationSpeed: 5,
              cometFrequence: 50,
              nebulasIntensity: 8,
              bgColor: "rgb(8,8,8)",
              sunScale: 3,
              planetsScale: 3,
              solarSystemOrbite: 70,
              solarSystemSpeedOrbit: 100,
            }
          : {
              starsCount: 100,
              starsColor: "#FFFFFF",
              starsRotationSpeed: 10,
              cometFrequence: 40,
              nebulasIntensity: 8,
              bgColor: "#87CEEB",
              sunScale: 5,
              planetsScale: 0,
              solarSystemOrbite: 85,
              solarSystemSpeedOrbit: 100,
            }
      }
    />
  );
};

export default Nebula;
