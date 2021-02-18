import React from "react";

function testemonials() {
  return (
    <section id="tes" className="testimonials">
      <h1 className="testimonials-header">
        Trusted by over 30 happy customers
      </h1>
      <div className="comment-container">
        <div data-aos="flip-down" className="comment">
          <p className="date">Nov,01,2020</p>
          <h1>Bezawit sheferaw</h1>
          <p>thank you dios for giving me the chance to study aboard</p>
        </div>
        <div data-aos="flip-left" className="comment">
          <p className="date">Aril,18,2019</p>
          <h1>Daniel assefa</h1>
          <p>thankyou dios for giving me the chance to work in poland</p>
        </div>
        <div data-aos="flip-down" className="comment">
          <p className="date">June,8,2020</p>
          <h1>Nati Getu</h1>
          <p>Thankyou</p>
        </div>
        <div data-aos="flip-left" className="comment">
          <p className="date">Sep,29,2020</p>
          <h1>Tadele Geremew.</h1>
          <p>i don't have any words to say you guys are the best</p>
        </div>
        <div data-aos="flip-right" className="comment">
          <p className="date">March,22,2020</p>
          <h1>Samuel Mengestu</h1>
          <p>thankyou dios for this opportunity</p>
        </div>
      </div>
    </section>
  );
}

export default testemonials;
