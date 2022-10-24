import React, { useEffect, useState } from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";
import DayNightToggle from "react-day-and-night-toggle";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") === "Dark"
  );

  const scrollTo = () => {
    document.getElementById("ContactMe").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (
      isDarkMode ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        localStorage.getItem("mode") !== "Light")
    ) {
      localStorage.setItem("mode", "Dark");
      document.documentElement.classList.toggle("dark-mode");
      document.getElementById("not-dark").classList.toggle("inverse-dark");
      document.getElementById("not-dark2").classList.toggle("inverse-dark");
      var x = document.getElementsByClassName("img-pro");
      for (let i = 0; i < x.length; i += 1) {
        x.item(i).classList.toggle("inverse-dark");
      }
    }
    // eslint-disable-next-line
  }, []);

  const toggleDarkMode = (e) => {
    document.documentElement.classList.toggle("dark-mode");
    document.getElementById("not-dark").classList.toggle("inverse-dark");
    document.getElementById("not-dark2").classList.toggle("inverse-dark");
    var x = document.getElementsByClassName("img-pro");
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle("inverse-dark");
    }

    if (document.documentElement.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "Dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("mode", "Light");
      setIsDarkMode(false);
    }
  };

  return (
    <div>
      <div className="Header">
        <h1>HOLA !</h1>
        <h2>{`I'm ${header.name}`}</h2>
        <br />
        <p className="line-1 anim-typewriter">FULL STACK DEVELOPER</p>
        <DayNightToggle
          className="switch"
          onChange={(e) => toggleDarkMode(e)}
          checked={isDarkMode}
        />
        <HeaderButton />
      </div>
      <img
        id="not-dark"
        onClick={scrollTo}
        alt="Contact Me"
        title="Contact Me"
        className="gtp"
        src="profile.png"
      ></img>
    </div>
  );
};

export default Header;
