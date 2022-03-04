import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a 
                    href="https//github.com/mollymontgomery">
                <img 
                    src={require("../../assets/logos/github.png")}
                    alt="Github"
                    className="logo"
                    ></img>       
                </a>
            </div>
            <div>
                <a 
                    href="https://www.linkedin.com/in/mollymontgomery515/">
                <img 
                    src={require("../../assets/logos/linkedin.png")}
                    alt="Linkedin"
                    className="logo"
                    ></img>       
                </a>
            </div>
            <div>
                <a 
                    href="mailto:mollymontgomery515@gmail.com">
                <img 
                    src={require("../../assets/logos/email.png")}
                    alt="email"
                    className="logo"
                    ></img>       
                </a>
            </div>
        </footer>
    );
}

export default Footer;