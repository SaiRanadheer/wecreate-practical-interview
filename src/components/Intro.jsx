import React from 'react';
import './Intro.css';
import MoreThanVisualDesign from '../images/more-than-visual-design.png';

export default function Header() {
  return (
    <section className="intro section">
      <div className="intro__container container grid">
        <div className="intro__content grid">
          <div className="intro--left">
            <img src={MoreThanVisualDesign} alt="Intro" />
          </div>
          <div className="intro--right">
            <p className="title">More than visual design, more than interactions</p>
            <p className="description">
              <span>
                We take pride in our craft. Drawing on our own expertise in design, our Product.
                Design team cares for your users&apos; experience over the entire customer journey,
                at every touchpoint with your company
              </span>
              <span>
                We shepherd your product through the entire design process. We aim to achieve your
              </span>
              <span>
                We also collaborate with our Software Engineering team to ensure our designs are
                technically feasible within the constraints of the project. At the same time
                we&apos;re watching for innovative new technologies that can make the experience
                more seamless.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
