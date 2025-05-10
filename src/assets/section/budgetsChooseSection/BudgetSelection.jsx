import React, {  useState } from 'react';
import './BudgetSelection.css';
import CardComponent from '../../components/cardComponent/CardComponent';
import dataJson from "../../../Data.json"
import ShowUsers from '../../components/showUsers/ShowUsers';
import UserForm from '../../components/User-form/UserForm';





function BudgetSelection(props) {
  const [data, setData]=useState(dataJson)
  const [total, setTotal]=useState(0);
  const [service, setService]=useState([])
console.log(total);
console.log(total,data);


  const addToTotal=(amount)=>{
    setTotal(total+amount); 
  };

  

  const handleSelectionChange=(isChecked, subTotal, serviceName) => {
    if (isChecked) {
      setTotal(total+subTotal); 
      setService([...service, serviceName])
    }else{
      setTotal(total-subTotal)
      setService(service.filter((name) => name !== serviceName))
    }
  };

  const handleClick=()=>{
    setTotal(0);
  }

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
      handleClick={handleClick}
      // setSelectedService={setSelectedService}
      // selectedService={selectedService}
      
     
      
     
    /> 
    
    
      )
      
      })}
    
    {/* {data.map((eachData)=>{
      return (
         <ShowUsers key={eachData.id} 
      h4Content={eachData.service}
      pContent={eachData.content}
      priceContent={eachData.priceContent}
      handleSelectionChange={handleSelectionChange}
      addToTotal={addToTotal}
      handleClick={handleClick}
      // setSelectedService={setSelectedService}
      // selectedService={selectedService}
     
     
      
     
    /> 
    
      )
      
      })} */}
     
      <h4 className='total mt-5' >Total:{total}</h4> 
      <ShowUsers service={service} total={total}/>
   
    </div>
     
  );
}

export default BudgetSelection;