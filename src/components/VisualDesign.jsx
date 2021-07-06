import React from 'react';
import './VisualDesign.css';
import VisualDesign from '../images/visual-design.svg';

export default function UserExperience() {
  return (
    <div className="vd__container">
      <div className="vd__content">
        <div className="image">
          <img src={VisualDesign} alt="User Experience" />
        </div>
        <div className="text">
          <p className="vd__title">Visual design</p>
          <p className="vd__description">
            Yes, we make your software product beautiful. We also make it easy-to-use, compelling,
            and delightful.
          </p>
          <p className="vd__misc__title">TACTICS</p>
          <div className="vd__misc">
            <div>
              <p>Design workshop</p>
              <p>Custom iconography</p>
            </div>
            <div>
              <p>Visual design concept</p>
              <p>UI elements</p>
            </div>
            <div>
              <p>Typography system</p>
              <p>Style guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
