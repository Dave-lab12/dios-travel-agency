import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import cont from "../img/cont.svg";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";

function contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5mgwp1l",
        "template_rfgb9ua",
        e.target,
        "user_tTgzzW4Gxl0dsiTczUVO9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <section id="con" className="contact">
        <div className="contact-items">
          <h1 data-aos="fade-down">Contact us</h1>
          <form onSubmit={sendEmail}>
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Your Name"
              className="name-input"
              name="from_name"
              required
            />
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Your Email"
              className="email-input"
              name="email"
              required
            />

            <textarea
              data-aos="fade-up"
              placeholder="Message"
              name="message"
              id=""
              cols="19"
              rows="5"
              className="message-input"
            ></textarea>
            <button data-aos="fade-down" className="btn-submit" type="submit">
              Submit <BiMessageRoundedDetail className="pl" />
            </button>
          </form>
        </div>
        <img src={cont} alt="cont" className="con-svg" />
      </section>
      <section className="footer">
        <div className="links">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            to="home"
          >
            <p>Home</p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            to="About"
          >
            <p>About Us</p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            to="tes"
          >
            <p>Testimonials</p>
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            to="de"
          >
            <p>Countries</p>
          </Link>
        </div>
        <p className="copy">ዳios 2021 ©</p>
        <div className="social">
          Follow Us On:
          <div className="icons">
            <a href="#s" target="_blank" rel="noreferrer">
              <IoLogoFacebook />
            </a>
            <a href="https://t.me/forzajuven" target="_blank" rel="noreferrer">
              <FaTelegram />
            </a>
            <a href="#s" target="_blank" rel="noreferrer">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
// service_5mgwp1l

export default contact;
