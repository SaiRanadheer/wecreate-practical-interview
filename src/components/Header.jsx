import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

import LinkAbout from './LinkAbout';

export default function Header(props) {
  const { title, description, image, displayAbout } = props;

  return (
    <>
      <header className="header">
        <div className="header__container container grid">
          <div className="header__content grid">
            <div className="header--left">
              <p className="title">{title}</p>
              <p className="description">{description}</p>
              {displayAbout && <LinkAbout />}
            </div>
            <div className="header--right">
              <img src={image} alt="Header" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  displayAbout: PropTypes.bool.isRequired,
};
