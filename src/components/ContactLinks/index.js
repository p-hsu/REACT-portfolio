import React from "react";
import "./style.css";

function ContactLinks() {
    return (
        <div id="contact-links">
                <a aria-label="See Pam's GitHub page" href="https://github.com/p-hsu" target="_blank" rel="noreferrer" data-tooltip="Pam's GitHub" className="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                    <i className="fab fa-github"></i>
                </a>
                <a aria-label="Pam's phone number is 2407518015" href="tel:2407518015" target="_blank" rel="noreferrer" data-tooltip="Call Pam" className="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                    <i className="fas fa-phone"></i>
                </a>
                <a aria-label="See Pam's LinkedIn page" href="https://www.linkedin.com/in/pamela-hsu-b46384202/" target="_blank" rel="noreferrer" data-tooltip="Pam's LinkedIn" className="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a aria-label="Email Pam" href="mailto:pamela.jk.hsu@gmail.com" target="_blank" rel="noreferrer" data-tooltip="Email Pam" className="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                    <i className="fas fa-envelope"></i>
                </a>
        </div>
    );
}

export default ContactLinks;