import React from "react";
import "./App.css";
import Gameboard from "./gameBoard";
import OptionButtons from "./optionButtons.js";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <div className="title-container">
          <h1>PentaG</h1>
          <img
            src="./images/icons8-pentagon-100.png"
            alt="pentagon"
            className="title-symbol"
          />
          <h1>!</h1>
        </div>
      </header>
      <section className="game-section">
        <div className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          magni in nisi aperiam architecto ducimus odio. Laboriosam excepturi in
          dolores, deleniti ut fuga vel quaerat magnam praesentium nihil sed
          accusantium?
          <Gameboard />
        </div>
        <article className="option-buttons">
          <OptionButtons />
        </article>
      </section>
      <footer>
        <span class="created-by">
          Created by Vanessa Bano |
          <a
            href="https://github.com/vtbano/Pentago.git"
            target="_blank"
            alt="GitHub link to Pentago App"
            id="githubLink"
          >
            GitHub |
          </a>
          <a
            href="https://www.linkedin.com/in/vanessatbano/"
            target="_blank"
            alt="Vanessa Bano's LinkedIn profile"
            id="LinkedIn"
          >
            LinkedIn
          </a>
        </span>
      </footer>
    </React.Fragment>
  );
};
export default App;
