import React from "react";

import {
  Navbar,
  Hero,
  About,
  Skills,
  Works,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
