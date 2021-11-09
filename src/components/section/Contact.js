import React, {useState} from 'react'
import { contact, section5Title, social, formSheet } from '../../profile'

const Contact = () => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const {name, email, message} = formData;

    const handleChange=(e)=>{
        setformData({...formData, [e.target.name]: e.target.value})
    };

    const submitForm=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(
                formSheet, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify([[name, email, message, new Date().toLocaleString()]])
                }
            )
            await response.json()
            alert("Hey "+name+ ", your form got submitted. Thanks for reaching out.")
            setformData({...formData, name: "",email: "",message: ""})
        } catch (error) {
            console.log(error);
            alert("Hey "+name+", there is an error in submitting the form. Please reach out through other media. Thanks")
        }
    };
    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form onSubmit={submitForm}>
                        <input type="text" id="fname" name="name" placeholder="Your name" value={name} required onChange={handleChange}></input>
                        <input type="mail" id="mailid" name="email" placeholder="Email Address" value={email} required onChange={handleChange}></input>
                        <textarea id="msg" name="message" placeholder="Message" value={message} required onChange={handleChange}></textarea>
                        <button style={{cursor: 'pointer'}} type="submit">Send Message</button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )
    
}

export default Contact
