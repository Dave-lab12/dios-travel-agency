import React from "react";
import { Link } from "react-scroll";

function nav() {
  return (
    <nav>
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1000}
        to="home"
      >
        <h1> ዳios</h1>
      </Link>
      <div className="nav-items">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          to="About"
        >
          <p className="nav-i">About Us</p>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          to="de"
        >
          <p className="nav-i">Destination</p>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          to="tes"
        >
          <p className="nav-i">Testimonials</p>
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          to="con"
        >
          <p className="con">Contact us</p>
        </Link>
      </div>
    </nav>
  );
}

export default nav;
