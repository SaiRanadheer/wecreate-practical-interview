import './DesignProcess.css';
import React from 'react';
import Discovery from '../images/discovery.svg';
import Research from '../images/research-and-project-estimation.svg';
import UI from '../images/ui.svg';
import Wireframe from '../images/wireframe.svg';

export default function DesignProcesss() {
  return (
    <div className="dp__container">
      <div className="dp__content">
        <p className="title">Our Design Process</p>
        <p className="description">
          Every decision we make is informed and goal oriented with the user journey in mind.
          Designing with a
        </p>

        <div className="circle">
          <div className="stat stat-right">
            <div>
              <img src={UI} alt="ui" />
            </div>
            3. UX wireframes
          </div>
          <div className="stat stat-bottom">
            <div>
              <img src={Wireframe} alt="wireframe" />
            </div>
            4. UI application
          </div>
          <div className="stat stat-left">
            <div>
              <img src={Discovery} alt="discovery" />
            </div>
            1. Discovery
          </div>
          <div className="stat stat-top">
            <div>
              <img src={Research} alt="research" />
            </div>
            2. Research + project estimation
          </div>
        </div>
      </div>
    </div>
  );
}
