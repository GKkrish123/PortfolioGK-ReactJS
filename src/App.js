/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";
import cornfieldChase from "./cornfieldChase.mp3";
import myVideo from "./dopeEdit.mp4";
import Nebula from "./components/layouts/Nebula";
import DayNightToggle from "react-day-and-night-toggle";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const App = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const [showVideoButton, setShowVideoButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") === "Dark"
  );

  useEffect(() => {
    if (windowWidth <= 800) {
      setShowVideoButton(true);
    } else {
      setVideoPlaying(false);
      setShowVideoButton(false);
    }
  }, [windowWidth]);

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

  const [audio] = useState(new Audio(cornfieldChase));
  const [MusicStartTrigger, setMusicStartTrigger] = useState("");
  const [playing, setPlaying] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  const toggleVideo = () => setVideoPlaying(!videoPlaying);

  useEffect(() => {
    audio.addEventListener("ended", () => audio.play());
  }, [audio]);

  useEffect(() => {
    MusicStartTrigger && setPlaying(true);
  }, [MusicStartTrigger]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="App"
      // onMouseMove={() => setMusicStartTrigger("Start")}
    >
      <button className="audio-button" onClick={toggle}>
        <i className={`${playing ? "fa fa-volume-up" : "fa fa-volume-mute"}`} />
      </button>
      {showVideoButton && (
        <button className="video-button" onClick={toggleVideo}>
          <i
            className={`${videoPlaying ? "fa fa-video" : "fa fa-video-slash"}`}
          />
        </button>
      )}
      {videoPlaying ? (
        <video className="Video" autoPlay loop muted>
          <source src={myVideo} type="video/mp4" />
        </video>
      ) : (
        <div className="nebula">
          <Nebula isDarkMode={isDarkMode} />
        </div>
      )}
      <DayNightToggle
        className="switch"
        onChange={(e) => toggleDarkMode(e)}
        checked={isDarkMode}
      />
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
