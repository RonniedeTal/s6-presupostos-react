import React, { useEffect, useState } from 'react';
import './BudgetSelection.css';
import CardComponent from '../../components/cardComponent/CardComponent';
import dataJson from "../../../Data.json"




function BudgetSelection() {
  const [data, setData]=useState(dataJson)

console.log(data);


  return (
    <div className="budget-selection ">
      {data.map((eachData)=>{
      return (
         <CardComponent key={eachData.id} 
      h4Content={eachData.service}
      pContent={eachData.content}
      priceContent={eachData.priceContent}
    /> 
      )
      })}
     
     
      <h4 className='total mt-5'>Total: </h4> 
    </div>
  );
}

export default BudgetSelection;