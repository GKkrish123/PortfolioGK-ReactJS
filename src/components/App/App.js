/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Portfolio from "../../App";
import Provider from "../Provider/Provider";
import Wrapper from "../Wrapper/Wrapper";
import Navbar from "../Navbar/Navbar";
import Mercury from "../../pages/Mercury/Mercury";
import Venus from "../../pages/Venus/Venus";
import Earth from "../../pages/Earth/Earth";
import Mars from "../../pages/Mars/Mars";
import Jupiter from "../../pages/Jupiter/Jupiter";
import Saturn from "../../pages/Saturn/Saturn";
import Uranus from "../../pages/Uranus/Uranus";
import Neptune from "../../pages/Neptune/Neptune";
import KeyVisual from "../KeyVisual/KeyVisual";
import cornfieldChase from "../../cornfieldChase.mp3";
import space from "../../space.jpg";

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [activePlanet, setActivePlanet] = useState("/");
  const [audio] = useState(new Audio(cornfieldChase));
  const [MusicStartTrigger, setMusicStartTrigger] = useState("");
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.addEventListener("ended", () => audio.play());
  }, [audio]);

  useEffect(() => {
    MusicStartTrigger && setPlaying(true);
  }, [MusicStartTrigger]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  return (
    <Provider>
      <Switch location={location} key={location.key}>
        <Wrapper pathName={location.pathname}>
          {/* <Navbar
          pathName={location.pathname}
          onHover={setActivePlanet}
          activePlanet={activePlanet}
        /> */}
          <button className="audio-button" onClick={toggle}>
            <i
              className={`${playing ? "fa fa-volume-up" : "fa fa-volume-mute"}`}
            />
          </button>
          {location.pathname !== "/" && (
            <img
              id="space-earth"
              className="space-earth"
              src={space}
              alt="earth"
              onClick={() => {
                document.getElementById("space-earth").className =
                  "space-earth-move";
                setTimeout(() => history.push("/"), 1000);
              }}
            />
          )}
          <AnimatePresence>
            <Route exact path="/planets/mercury">
              <Mercury />
            </Route>
            <Route exact path="/planets/venus">
              <Venus />
            </Route>
            <Route exact path="/planets/earth">
              <Earth />
            </Route>
            <Route exact path="/planets/mars">
              <Mars />
            </Route>
            <Route exact path="/planets/jupiter">
              <Jupiter />
            </Route>
            <Route exact path="/planets/saturn">
              <Saturn />
            </Route>
            <Route exact path="/planets/uranus">
              <Uranus />
            </Route>
            <Route exact path="/planets/neptune">
              <Neptune />
            </Route>
            <Route exact path="/planets">
              <KeyVisual activePlanet={activePlanet} />
            </Route>
            <Route exact path="/">
              <Portfolio />
            </Route>
          </AnimatePresence>
        </Wrapper>
      </Switch>
    </Provider>
  );
};

export default App;
