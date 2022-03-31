import React from "react";

import "./Works.css";
const Works = () => {
  return (
    <div className="work-container">
      <div className="parent">
        <div className="works-details">
          <div className="works-heading">
            <h1>Works</h1>
          </div>
          <div className="slide-left">
            <div className="grid-item">
              <img effect="blur" src={require("../../images/clock.jpg")} alt="clock" />
            </div>
            <div className="grid-item spl">
              <img effect="blur"
                className="h100px"
                src="https://iso.500px.com/wp-content/uploads/2019/11/Man-doing-postproduction-of-his-photos-on-laptop-at-night-By-Carina-Konig-1500x1000.jpg"
                alt="hello"
              />
            </div>
            <div className="grid-item">
              <img  src={require("../../images/lemon.jpg")} alt="lemon" />
            </div>

            <div className="grid-item">
              <img  src={require("../../images/holi.jpg")} alt="holi" />
            </div>
          </div>
          <div className="slide-right">
            <div className="grid-item">
              <img  src={require("../../images/clock.jpg")} alt="clock" />
            </div>
            <div className="grid-item spl">
              <img 
                className="h100px"
                src="https://iso.500px.com/wp-content/uploads/2019/11/Man-doing-postproduction-of-his-photos-on-laptop-at-night-By-Carina-Konig-1500x1000.jpg"
                alt="hello"
              />
            </div>
            <div className="grid-item">
              <img  src={require("../../images/lemon.jpg")} alt="lemon" />
            </div>

            <div className="grid-item">
              <img  src={require("../../images/holi.jpg")} alt="holi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
