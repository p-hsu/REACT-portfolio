import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
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
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;