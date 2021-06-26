import React from "react";

function Contact() {
  return (
    <section id="contact" class="section scrollspy">
    <h3 class="blue-grey-text text-darken-3 light-blue lighten-4">GET IN TOUCH</h3>
    <div class="container">
        <h6>Interested in a collaboration, looking for a new hire, or have a question about my work?</h6>
        <div id="contact-links">
            <a aria-label="See Pam's GitHub page" href="https://github.com/p-hsu" target="_blank" rel="noreferrer" data-tooltip="Pam's GitHub" class="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                <i class="fab fa-github"></i>
            </a>
            <a aria-label="Pam's phone number is 2407518015" href="tel:2407518015" target="_blank" rel="noreferrer" data-tooltip="Call Pam" class="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                <i class="fas fa-phone"></i>
            </a>
            <a aria-label="See Pam's LinkedIn page" href="https://www.linkedin.com/in/pamela-hsu-b46384202/" target="_blank" rel="noreferrer" data-tooltip="Pam's LinkedIn" class="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                <i class="fab fa-linkedin"></i>
            </a>
            <a aria-label="Email Pam" href="mailto:pamela.jk.hsu@gmail.com" target="_blank" rel="noreferrer" data-tooltip="Email Pam" class="btn-floating btn-large waves waves-effect waves-light teal darken-1">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    </div>
</section>
  );
}

export default Contact;