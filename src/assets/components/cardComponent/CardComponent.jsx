import React, { useState } from 'react';
import './CardComponent.css';


function CardComponent(props) {
  const [check, setCheck]=useState(false)
  const [isAddContentShowing, setIsAddContentShowing]=useState(false)
  const [numPages, setNumPages ]=useState(1)
  const [numLanguages, setNumLanguages]=useState(1)

  const handleCheckOnchange=(e)=>{
   
    const isChecked = e.target.checked;
    setCheck(isChecked)
    console.log(props.h4Content, isChecked, e.target); 

  }

  const HandleShowing=()=>{
    setIsAddContentShowing(!isAddContentShowing)
  }
  const handleIncrease=()=>{
    setNumPages(numPages+1)
  }
  const handleDecrease=()=>{
    setNumPages(numPages-1)
  }

  const handleLanguagesIncrease=()=>{
    setNumLanguages(numLanguages+1)
  }
  const handleLanguagesDecrease=()=>{
    setNumLanguages(numLanguages-1)
  }

  return (
    <div className="card w-50 mt-3 mx-auto shadow-lg">
      <div className="card-body inner-card">
        <div className="text-content">
          <h4>{props.h4Content}</h4>
          <p>{props.pContent}</p>
        </div>
        <h3 className="price">{props.priceContent}$</h3>
        <span> <input type="checkbox" checked={check} name={props.h4Content} onChange={handleCheckOnchange} onClick={HandleShowing}/>Add</span>
        {isAddContentShowing ? (
  <div className='container'>
    <div className="counter-row">
      <span>Pages:</span>
      <div className="counter-controls">
        <button className="counter-button" onClick={handleDecrease}>➖</button>
        <span className="counter-value">{numPages}</span>
        <button className="counter-button" onClick={handleIncrease}>➕</button>
      </div>
    </div>

    <div className="counter-row">
      <span>Languages:</span>
      <div className="counter-controls">
        <button className="counter-button" onClick={handleLanguagesDecrease}>➖</button>
        <span className="counter-value">{numLanguages}</span>
        <button className="counter-button" onClick={handleLanguagesIncrease}>➕</button>
      </div>
    </div>
  </div>
):null}
      </div>
    </div>
  );
}

export default CardComponent;