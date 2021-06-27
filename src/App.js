import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import './App.css';

// function App() {

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/skills" component={Skills} />
//           <Route exact path="/projects" component={Projects} />
//           <Route exact path="/contact" component={Contact} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;