import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
}

export default App;
