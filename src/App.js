import React from "react";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import Main from "./components/main/main.js";
import "./App.css";
import "./components/header/header.css";
import "./components/main/main.css";
import "./components/footer/footer.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
