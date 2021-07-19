import React from "react";
import "./style.css";
import driftwood from "../../images/driftwood-mi.jpg"

function HomeWrapper(props) {
  return (
    <section 
      className="section scrollspy full-height"
      style={{
        backgroundImage: `url(${driftwood})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '100vh'
      }}
    >
        {props.children}
    </section>
  );
}

export default HomeWrapper;