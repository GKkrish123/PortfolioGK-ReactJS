import React, { useState } from "react";
import { contact, section5Title, social } from "../../profile";
import emailjs from "@emailjs/browser";
import Kawaii from "../layouts/Kawaii";

const Contact = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");
  const [kawaiiEmotion, setKawaiiEmotion] = useState("excited");

  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .send(
        "service_76ddsb7",
        "template_3ack8ia",
        formData,
        "rQiJxT-yYhtQm3NY4"
      )
      .then(
        (result) => {
          console.log("Message Sent -> ", result);
          alert(
            "Message Sent, Thanks for your attention. I have something for you ;)."
          );
          setKawaiiEmotion("lovestruck");
          setTimeout(() => setKawaiiEmotion("excited"), 4000);
          window.emojisplosion({
            emojiCount: 25,
            position() {
              const element = document.getElementById("Contact");
              const offset = element.getBoundingClientRect();

              return {
                x: offset.left + element.clientWidth / 2,
                y: offset.top + element.clientHeight / 2,
              };
            },
          });
          setformData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error in sending message -> ", error);
          alert("An error occurred, Please try to send message again");
        }
      );
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setInvalidEmail(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)
      );
    }
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  // const submitForm=async(e)=>{
  //     e.preventDefault();
  //     try {
  //         const response = await fetch(
  //             formSheet, {
  //                 method: "POST",
  //                 headers: {
  //                     "Content-Type": "application/json"
  //                 },
  //                 body: JSON.stringify([[name, email, message, new Date().toLocaleString()]])
  //             }
  //         )
  //         await response.json()
  //         alert("Hey "+name+ ", your form got submitted. Thanks for reaching out.")
  //         setformData({...formData, name: "",email: "",message: ""})
  //     } catch (error) {
  //         console.log(error);
  //         alert("Hey "+name+", there is an error in submitting the form. Please reach out through other media. Thanks")
  //     }
  // };

  return (
    <div id="ContactMe" className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <div className="contact-header">
          <Kawaii mood={kawaiiEmotion} focusedInput={focusedInput} />
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Your name"
                  onFocus={() => setFocusedInput("#fname")}
                  onBlur={() =>
                    focusedInput === "#fname" && setFocusedInput("")
                  }
                  value={name}
                  required
                  onChange={handleChange}
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="email"
                  onFocus={() => setFocusedInput("#mailid")}
                  onBlur={() =>
                    focusedInput === "#mailid" && setFocusedInput("")
                  }
                  placeholder="Email Address"
                  value={email}
                  required
                  onChange={handleChange}
                ></input>
                {invalidEmail && (
                  <label className="error-text">
                    ! Please enter a valid email address !
                  </label>
                )}
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onFocus={() => setFocusedInput("#msg")}
                  onBlur={() => focusedInput === "#msg" && setFocusedInput("")}
                  required
                  onChange={handleChange}
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      title="Visit Instagram profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        2021 © Copyright <strong>{contact.copyright}</strong>. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Contact;
