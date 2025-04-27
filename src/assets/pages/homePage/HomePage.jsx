import React from 'react'
import './HomePage.css'
import CardComponent from '../../components/cardComponent/CardComponent'
import HeaderSection from '../../section/HeaderSection'
import BudgetSelection from '../../section/budgetsChooseSection/BudgetSelection'

function HomePage() {
  return (
    <>
    <HeaderSection />
   

    <BudgetSelection />
    </>
    
  )
}

export default HomePage