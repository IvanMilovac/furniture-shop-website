import React from "react";
import { Navbar } from "./components";
import {
  Header,
  Companies,
  Features,
  About,
  Products,
  Testimonials,
  Footer,
} from "./containers";

import "./Index.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Companies />
      <Features />
      <About />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
