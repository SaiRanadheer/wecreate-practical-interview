import React from 'react';
import './ProductDesign.css';

export default function ProductDesign() {
  return (
    <div className="pd__container">
      <div className="pd__content">
        <p className="pd__title">Product Design Services</p>
        <div className="cards">
          <div className="card active">User experience design</div>
          <div className="card">Visual design</div>
          <div className="card">Prototyping</div>
          <div className="card">Content design</div>
          <div className="card">Design Systems</div>
          <div className="card">Voice, Chatbots &amp; Multimodal UI</div>
        </div>
      </div>
    </div>
  );
}
