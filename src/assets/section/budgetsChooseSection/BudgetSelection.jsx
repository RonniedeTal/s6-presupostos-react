import React, {  useState } from 'react';
import './BudgetSelection.css';
import CardComponent from '../../components/cardComponent/CardComponent';
import dataJson from "../../../Data.json"





function BudgetSelection(props) {
  const [data, setData]=useState(dataJson)
  const [total, setTotal]=useState(0);
console.log(total);

  const addToTotal=(amount)=>{
    setTotal(total+amount); 
  };
  
  const handleSelectionChange=(isChecked, subTotal) => {
    if (isChecked) {
      setTotal(total+60+subTotal); 
      
    }else{
      setTotal(total-subTotal)
    }
  };


  return (
    <div className="budget-selection ">
      {data.map((eachData)=>{
      return (
         <CardComponent key={eachData.id} 
      h4Content={eachData.service}
      pContent={eachData.content}
      priceContent={eachData.priceContent}
      handleSelectionChange={handleSelectionChange}
      addToTotal={addToTotal}
      
     
    /> 
      )
      })}
  
     
      <h4 className='total mt-5' >Total:{total}</h4> 
    </div>
    
   
  );
}

export default BudgetSelection;