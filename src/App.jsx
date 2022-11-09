import React from "react";

import { Navbar, Hero, About, Works, Contact, Footer } from "./components";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
