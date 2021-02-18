import React from "react";
import Nav from "./nav";
import globe from "../img/globe.svg";
import wave from "../img/Vector.svg";
import { CgAirplane } from "react-icons/cg";
import { Link } from "react-scroll";

function home() {
  return (
    <section className="home">
      <Nav />
      <main>
        <div className="content">
          <h1 className="title">Welcome to Dios travel Agency</h1>
          <p>
            Dios travel agent is a world wide company with so many agents in
            side the company and have more than 3 official offices in china
            ,Ethiopia and poland Your application is in safe hand contact us for
            more
          </p>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            to="de"
          >
            <button className="Home-btn">
              Get Started <CgAirplane className="pl" />
            </button>
          </Link>
        </div>
        <div className="svg">
          <img src={globe} alt="World" />
        </div>
      </main>

      <img src={wave} alt="wave" className="wave" />
    </section>
  );
}

export default home;
