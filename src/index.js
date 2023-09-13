import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles.css'

//import App from "./App";

function App() {
  let image;
  if {props.image} {
    image=""
}else{
  image= props.image;
}
  return (
    <div>
      <Avatar
        image=""
        name="Jane Doe"
        tagline="Graphic design is my passion"/>

      <workExperience id="1" profile="John Doe">
        <Company name=""/>
        <Company/>
        <Company/>
      </workExperience>
      <Portfolio>
        <Project image="https://picsum.photos/id/237/200/300" />
        <Project image="https://picsum.photos/seed/picsum/200/300" />
        <Project image="https://picsum.photos/200/300?grayscale" />
        <Project />
      <Portfolio />
    </div>
  )
}

function Avatar(props) {
  return(
    <div className="profile-container">
      <div className="">

      </div>
    </div>
  )
}

function workExperience(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function Company() {
  return(
    <li>
      <h2>
        <span className="company">{props.name}</span>
        <span className="from">{props.from.date}</span>
        <span className="to">{prop.to.date}<span>
      </h2>
      <p>
        insert lorem ipsuem here
      </p>

    </li>
  )
}

function Portfolio(props) {
  return(
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

function Project() {
  return(
    <div className="project">
      <div className="project-img">
        <img src={props.image} alt="" />
      </div>
      <div className="project-description">
        <p>
          insert lorem ipsuem here
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
