import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";
import space from "../../space.jpg";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const scrollTo = () => {
    document.getElementById("ContactMe").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="Header">
        <h1>HOLA !</h1>
        <h2>{`I'm ${header.name}`}</h2>
        <br />
        <h3 className="line-1 anim-typewriter">FULL STACK DEVELOPER</h3>
        <HeaderButton />
        <img
          className="space"
          src={space}
          alt="space"
          onClick={() => history.push("/planets")}
        />
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
