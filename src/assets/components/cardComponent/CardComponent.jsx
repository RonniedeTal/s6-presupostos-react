import React, { useEffect, useState } from 'react';
import './CardComponent.css';
import AddsComponent from '../adding-component/AddsComponent';




function CardComponent(props) {
  const [check, setCheck]=useState(false)
  const [isAddContentShowing, setIsAddContentShowing]=useState(false)
  const [numPages, setNumPages ]=useState(1)
  const [numLanguages, setNumLanguages]=useState(1)
 
console.log();

  const handleCheckOnchange = (e) => {
    const isChecked = e.target.checked;
    setCheck(isChecked);
  
  
    const basePrice = Number(props.priceContent);
    const extras = (numPages - 1 + numLanguages - 1) * 30;
    const subtotal = basePrice + extras;
  
    if (props.handleSelectionChange) {
      props.handleSelectionChange(isChecked, subtotal, props.h4Content);
    }
    console.log(props.h4Content);
    
  };

  const HandleShowing = () => {
    const getShowingValue = !isAddContentShowing;
  
    if (!getShowingValue && check) {
      const extras = (numPages - 1 + numLanguages - 1) * 30;
      props.addToTotal(-extras);
      setNumPages(1);
      setNumLanguages(1);
    }
  
    setIsAddContentShowing(getShowingValue);
  };

  const handleIncrease=()=>{
    
    setNumPages(numPages+1);
    props.addToTotal(30); 
    
  };
  const handleDecrease=()=> {
    if (numPages > 1) {
      setNumPages(numPages-1);
      props.addToTotal(-30); 
    }
  };
  const handleLanguagesIncrease=()=>{
    setNumLanguages(numLanguages+1);
    props.addToTotal(30); 
  };

  const handleLanguagesDecrease =()=>{
    if (numLanguages > 1) {
      setNumLanguages(numLanguages-1);
      props.addToTotal(-30);
    }
  };
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
 {/* <BudgetSelection price={price}/> */}

      </div>

    
      
    </div>

    
    
   
  );
}

export default CardComponent;