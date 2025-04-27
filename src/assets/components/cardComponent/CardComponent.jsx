import React from 'react';
import './CardComponent.css';

function CardComponent(props) {
  return (
    <div className="card w-50 mt-3 mx-auto shadow-lg">
      <div className="card-body inner-card">
        <div className="text-content">
          <h4>{props.h4Content}</h4>
          <p>{props.pContent}</p>
        </div>
        <h3 className="price">{props.priceContent}$</h3>
      </div>
    </div>
  );
}

export default CardComponent;