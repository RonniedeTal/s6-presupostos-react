import React, { useState } from 'react'
import users from "../../users.json"
import UserForm from '../User-form/UserForm'
import SearchBar from '../searchBar-component/SearchBar'
function ShowUsers() {

    const [user, setUser]=useState(users)
    const [searchValue, setSearchValue]=useState("")
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
                </div>
            )
            })}
        </div>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <UserForm  
      user={user} 
      setUser={setUser}
      
      />
      
    </div>
  )
}

export default ShowUsers
