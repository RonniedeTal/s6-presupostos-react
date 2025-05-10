import React, { useState } from 'react'
import users from "../../users.json"
import UserForm from '../User-form/UserForm'
import SearchBar from '../searchBar-component/SearchBar'
import CardComponent from '../cardComponent/CardComponent'
import BudgetSelection from '../../section/budgetsChooseSection/BudgetSelection'
function ShowUsers(props) {

    const [user, setUser]=useState(users)
    const [searchValue, setSearchValue]=useState("")
    // const [selectedService, setSelectedService]=useState(null)
    // console.log(selectedService, setSelectedService);
    
    
  return (
    <div>

        <div>
            { user
            .filter((eachUser)=>{
             return eachUser.name.startsWith(searchValue)
            })
            .map((eachUser, i)=>{
             return(
                 <div key={i}>
                 <p>{eachUser.name}</p>
                 
                 <p>{eachUser.email}</p>
                 <p>{eachUser.telephone}</p>
                 <p>{props.h4Content}</p>
                 <p>{eachUser.totalPrice}</p>
                 <p>Services: {eachUser.service}</p>
                 <p>total: {eachUser.total}</p>
                 </div>
                 
             )
             
             
             })}
             
        </div>

        
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <UserForm  
      user={user} 
      setUser={setUser}
      service={props.service}
      total={props.total}
      
      
      
      />
      
    
    </div>
  )
}

export default ShowUsers