import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";

import Contact from "./contents/Contact";
import Resume from "./contents/Resume";
import AcademicWorkExperience from "./contents/AcademicWorkExperience";
import ProfessionalSummary from "./contents/ProfessionalSummary";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/Resume-CoverLetter">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Academics">
          <AcademicWorkExperience />
        </Route>
        <Route path="/ProfessionalSummary">
          <ProfessionalSummary />
        </Route>
      </div>
    </Router>
  );
}

export default App;
