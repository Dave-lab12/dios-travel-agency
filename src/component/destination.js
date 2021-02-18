import React from "react";

import canada from "../img/canada.svg";
import china from "../img/china.svg";
import turkey from "../img/turkey.svg";
import poland from "../img/poland.svg";
import { CgAirplane } from "react-icons/cg";

function destination() {
  return (
    <div id="de">
      <section className="Countries">
        <h1 className="des-header">Destination</h1>
        <div className="container">
          <img data-aos="fade-right" src={poland} alt="poland" />
          <div className="text-desc">
            <h1 data-aos="fade-down" className="country-name">
              Poland
            </h1>
            <ul data-aos="fade-left">
              <li>
                Study in poland. Electronic Information Science and Technology
              </li>
              <li>Computer Science and Technology</li>
              <li>Software Engineering</li>
              <li>Material Chemistry</li>
              <li>Environmental Science</li>
              <li>Chemical Engineering and Technology</li>
              <li>Biological technology</li>
              <li>International economy</li>
              <li>Information Management and Information System</li>
              <li>Marketing</li>
              <li>Economics</li>
              <li>Biological and Medical Engineering</li>
            </ul>
            <a href="https://t.me/Hena1989" target="_blank" rel="noreferrer">
              <button className="apply-btn">
                Apply <CgAirplane className="pl" />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="Countries">
        <div className="container">
          <img data-aos="fade-right" src={canada} alt="poland" />
          <div className="text-desc">
            <h1 data-aos="fade-down" className="country-name">
              Canada
            </h1>
            <ul data-aos="fade-left">
              <p>Universities</p>
              <li>Alberta University </li>
              <li>british University </li>
              <li>Toronto University </li>
              <li>McGill University </li>
              <li>Calgary University </li>
            </ul>
            <a href="https://t.me/Hena1989" target="_blank" rel="noreferrer">
              <button className="apply-btn">
                Apply <CgAirplane className="pl" />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="Countries">
        <div className="container">
          <img data-aos="fade-right" src={turkey} alt="poland" />
          <div className="text-desc">
            <h1 data-aos="fade-down" className="country-name">
              Turkey
            </h1>
            <p data-aos="fade-left">
              Tourism, travel, leisure and holiday guide to Turkey wonderfully
              reflecting the heavenly and serene beauties, and the adventures
              and places to explore
            </p>
            <a href="https://t.me/Hena1989" target="_blank" rel="noreferrer">
              <button className="apply-btn">
                Apply <CgAirplane className="pl" />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="Countries">
        <div className="container">
          <img data-aos="fade-right" src={china} alt="poland" />
          <div className="text-desc">
            <h1 data-aos="fade-down" className="country-name">
              China
            </h1>
            <ul data-aos="fade-left">
              <p>Universities</p>
              <li>Peking University </li>
              <li>Zhejiang University</li>
              <li>Beijing University</li>
              <li>Shanghai University</li>
              <li>Jiangxi University</li>
              <li>Henan University</li>
            </ul>
            <ul data-aos="fade-left">
              <p>Majors for Bachelors, Masters and PhD</p>
              <li>English </li>
              <li>Computer science engineering </li>
              <li>Civil engineering </li>
              <li>Mechanical engineering </li>
              <li>Geology </li>
              <li>Public health</li>

              <p>and many more</p>
            </ul>
            <a href="https://t.me/Hena1989" target="_blank" rel="noreferrer">
              <button className="apply-btn">
                Apply <CgAirplane className="pl" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default destination;
