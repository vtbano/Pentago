import React from "react";
import Footer from "./footer.js";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <h1>PentaG</h1>
        <img
          src="./images/icons8-pentagon-100.png"
          alt="pentagon"
          className="title-symbol"
        />
        <h1>!</h1>
      </header>
      <div className="container"></div>
      <Footer />
    </main>
  );
}
export default App;
