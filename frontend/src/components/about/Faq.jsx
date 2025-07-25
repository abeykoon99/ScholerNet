import React, { useState } from "react";
import { faq } from "../../dummydata";
import Heading from "../common/heading/Heading";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="container">
        <Heading subtitle="FAQs" title="Frequently Asked Questions" />
        <div className="faq-list">
          {faq.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span className="icon">
                  {activeIndex === index ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
                </span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
