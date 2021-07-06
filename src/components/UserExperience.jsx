import React from 'react';
import './UserExperience.css';
import UserExperienceDesign from '../images/user-experience-design.svg';

export default function UserExperience() {
  return (
    <div className="ux__container">
      <div className="ux__content">
        <div className="text">
          <p className="ux__title">User experience design</p>
          <p className="ux__description">
            Even after the Product Strategy phase, we maintain relentless focus on your business
            goals. Our Product Design team ensures the product we deliver will solve your challenge
            while meeting your user&apos;s needs.
          </p>
          <p className="ux__misc__title">TACTICS</p>
          <div className="ux__misc">
            <div>
              <p>Behavioral data analytics</p>
              <p>Wireframe</p>
            </div>
            <div>
              <p>Personalization architecture</p>
              <p>User flow</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={UserExperienceDesign} alt="User Experience" />
        </div>
      </div>
    </div>
  );
}
