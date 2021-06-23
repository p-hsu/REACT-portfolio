import React from "react";
import "./style.css";

function HomeWrapper(props) {
  return (
    <section id="home" className="section scrollspy full-height">
        {props.children}
    </section>
  );
}

export default HomeWrapper;