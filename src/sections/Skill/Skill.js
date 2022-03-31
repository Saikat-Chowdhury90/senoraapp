import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="parent">
        <div className="skill-content">
          <div className="skill-display">
            <div className="skill-display-inner">
              <h1>App Development</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis velit praesentium ullam exercitationem minus nihil et
                corrupti optio quibusdam, quasi consequuntur tempora voluptas.
                Repudiandae dolorem, ducimus et illo ipsum, eaque ad ab nisi,
                rem voluptates excepturi velit dolores vero? Ipsa ipsum
                distinctio itaque! Ducimus, eligendi? Natus nisi debitis laborum
                provident.
              </p>
            </div>
          </div>
          <div className="skill-cards">
            <div className="card-skill ui">
              {/* <img className="ui-design" src="https://picsum.photos/id/404/367/267" alt="lorem" /> */}
             
             
              <h3>UI DESIGN</h3>
              <i class="fa-solid fa-display fa-6x "></i>
            </div>
            <div className="card-skill web">
              {/* <img className="web-design" src="https://picsum.photos/id/404/367/267" alt="lorem" /> */}
              <h3>WEB DEVELOPMENT</h3>
              <i class="fa-solid fa-code fa-5x"></i>
            </div>
            <div className="card-skill app-dev">
              {/* <img className="app-development" src="https://picsum.photos/id/404/367/267" alt="lorem" /> */}
              <h3>APP DEVELOPMENT</h3>
              <i class="fa-brands fa-app-store fa-6x"></i>
            </div>
            <div className="card-skill blog">
              {/* <img className="blog-writing" src="https://picsum.photos/id/404/367/267" alt="lorem" /> */}
              <h3>BLOG WRITING</h3>
              <i class="fa-solid fa-book fa-6x"></i>
            </div>
            <div className="card-skill type">
              {/* <img className="type-design" src="https://picsum.photos/id/404/367/267" alt="lorem" /> */}
              <h3>TYPE DESIGN</h3>
              <i class="fa-solid fa-t fa-6x"></i>
            </div>
            <div className="card-skill project">
              {/* <img  src="https://picsum.photos/id/404/367/267" alt="lorem" /> */}
              <h3>PROJECT MANAGEMENT</h3>
              <i class="fa-solid fa-list-check fa-6x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
