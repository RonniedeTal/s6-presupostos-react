import React from 'react'
import './HomePage.css'

import HeaderSection from '../../section/HeaderSection'
import BudgetSelection from '../../section/budgetsChooseSection/BudgetSelection'
import UserForm from '../../components/User-form/UserForm'
import ShowUsers from '../../components/showUsers/ShowUsers'
import SearchBar from '../../components/searchBar-component/SearchBar'

function HomePage() {
  return (
    <>
    <HeaderSection />
   

    <BudgetSelection />

    {/* <SearchBar /> */}
   
    <ShowUsers />

    </>
    
  )
}

export default HomePage