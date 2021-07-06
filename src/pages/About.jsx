import * as React from 'react';
import './About.css';
import { withRouter } from 'react-router';
import Header from '../components/Header';
import Intro from '../components/Intro';
import ProductDesign from '../components/ProductDesign';
import DesignProcess from '../components/DesignProcess';
import UserExperience from '../components/UserExperience';
import VisualDesign from '../components/VisualDesign';
import UserExperienceDesign from '../images/user-experience-design.svg';

function About() {
  return (
    <>
      <Header
        title="About Us"
        description="We take pride in our craft. Drawing on our own expertise in design, our Product. Design team cares for your users' experience over the entire customer journey, at every touchpoint with your company"
        image={UserExperienceDesign}
        dispalyAbout={false}
      />
      <Intro />
      <DesignProcess />
      <ProductDesign />
      <UserExperience />
      <VisualDesign />
    </>
  );
}

export default withRouter(About);
