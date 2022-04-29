import React from "react";

const Footer = () => {
  return (
    <span className="created-by">
      <span>Created by Vanessa Bano </span>

      <div>•</div>
      <a
        href="https://github.com/vtbano/Pentago.git"
        target="_blank"
        alt="GitHub link to Pentago App"
        id="githubLink"
      >
        GitHub
      </a>
      <span>•</span>
      <a
        href="https://www.linkedin.com/in/vanessatbano/"
        target="_blank"
        alt="Vanessa Bano's LinkedIn profile"
        id="LinkedIn"
      >
        LinkedIn
      </a>
    </span>
  );
};
export default Footer;
