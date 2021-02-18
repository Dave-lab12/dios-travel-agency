import React from "react";
import plane from "../img/Group1.svg";

function about() {
  return (
    <section id="About" className="about-us">
      <h1 className="header-about">About us</h1>
      <p className="small">
        We are a dedicated team that guaranties your visa success in your dream
        country
      </p>
      <div className="box" data-aos="fade-right">
        <div className="text-container">
          <p className="number">5</p>
          <p>Destination</p>
        </div>
        <div className="text-container">
          <p className="number">20</p>
          <p>Successful Visa</p>
        </div>
        <div className="text-container">
          <p className="number">10</p>
          <p>Processing</p>
        </div>
      </div>
      <article>
        <ol data-aos="fade-right" class="timeline">
          <li>Fully Funded Scholarships With Monthly Stipends</li>
          <li>help clear over stay</li>
          <li>Work visa (1 year)</li>
          <li>Business visa</li>
          <li>Tourist visa</li>
          <li>Family Q visa</li>
          <li>Diploma Authentication</li>
          <li>Driving license </li>
        </ol>

        <img data-aos="fade-left" src={plane} alt="plane" className="plane" />
      </article>
    </section>
  );
}

export default about;
