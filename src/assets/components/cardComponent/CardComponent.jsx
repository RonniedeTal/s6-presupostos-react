import React, { useState } from 'react';
import './CardComponent.css';

function CardComponent(props) {
  const [check, setCheck]=useState(true)
  const handleCheckOnchange=(e)=>{
    // setCheck(!check)
    // const value=e.target.value
  if(e.target.value){
    setCheck(!check)
    console.log(props.h4Content, check);
    
  }
    
  }

  return (
    <div className="card w-50 mt-3 mx-auto shadow-lg">
      <div className="card-body inner-card">
        <div className="text-content">
          <h4>{props.h4Content}</h4>
          <p>{props.pContent}</p>
        </div>
        <h3 className="price">{props.priceContent}$</h3>
        <span> <input type="checkbox" value={check} name={props.h4Content} onChange={handleCheckOnchange}/>Add</span>
      </div>
    </div>
  );
}

export default CardComponent;