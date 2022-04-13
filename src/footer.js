import React from "react";

function Footer() {
  return (
    <section className="footer-buttons">
      <img
        src="./images/icons8-reset-96.png"
        alt="restart button"
        className="restart-button"
      />
      <img
        src="./images/icons8-puzzled-96.png"
        alt="Rules button"
        className="rules-button"
      />
      <img
        src="./images/icons8-activity-history-96.png"
        alt="move history button"
        className="history-button"
      />
      <div>
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
      </div>
    </section>
  );
}
export default Footer;
