import React, { useState } from 'react';
import './CardComponent.css';
import AddsComponent from '../adding-component/AddsComponent';


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
<AddsComponent
 check={check} 
 setCheck={setCheck}
 handleCheckOnchange={handleCheckOnchange} 
 HandleShowing={HandleShowing}
 handleIncrease={handleIncrease}
 handleDecrease={handleDecrease}
 handleLanguagesIncrease={handleLanguagesIncrease}
 handleLanguagesDecrease={handleLanguagesDecrease}
 numPages={numPages}
 setNumPages={setNumPages}
 numLanguages={numLanguages}
 setNumLanguages={setNumLanguages}
 isAddContentShowing={isAddContentShowing}
 setIsAddContentShowing={setIsAddContentShowing}

 />
      </div>
    </div>
  );
}

export default CardComponent;