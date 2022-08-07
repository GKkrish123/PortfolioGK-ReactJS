import React, { useEffect, useState } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";
import cornfieldChase from "./cornfieldChase.mp3";

function App() {
  const [audio] = useState(new Audio(cornfieldChase));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
  }, [audio]);

  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <button className='audio-button' onClick={toggle}>
          <i className={`${playing ? "fas fa-pause" : "fas fa-play"}`} />
      </button>
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
