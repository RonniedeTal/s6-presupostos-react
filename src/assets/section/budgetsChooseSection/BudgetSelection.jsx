import React from 'react';
import './BudgetSelection.css';
import CardComponent from '../../components/cardComponent/CardComponent';

function BudgetSelection() {
  return (
    <div className="budget-selection ">
      <CardComponent  
        h4Content='Seo'
        pContent='Programing a complete responsive web'
        priceContent="300"
      />
      <CardComponent 
        h4Content='Ads'
        pContent='Programing a complete responsive web'
        priceContent="400"
        
      />
      <CardComponent 
        h4Content='Web'
        pContent='Programing a complete responsive web'
        priceContent="500"
      />

      <h4 className='total mt-5'>Total: </h4>
    </div>
  );
}

export default BudgetSelection;