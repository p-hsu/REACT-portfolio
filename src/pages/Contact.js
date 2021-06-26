import React from "react";
import ContactLinks from "../components/ContactLinks";

function Contact() {
  return (
    <section id="contact" className="section scrollspy">
    <h3 className="blue-grey-text text-darken-3 light-blue lighten-4">GET IN TOUCH</h3>
    <div className="container">
        <h6>Interested in a collaboration, looking for a new hire, or have a question about my work?</h6>
        <ContactLinks />
    </div>
</section>
  );
}

export default Contact;