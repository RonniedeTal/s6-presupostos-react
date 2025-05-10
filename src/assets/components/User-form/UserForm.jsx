import React, { useState } from 'react'

function UserForm(props) {

    const [nameValue, setNameValue]=useState("")
    const [emailValue, setEmailValue]=useState("")
    const [telephoneValue, setTelephoneValue]=useState("")

    const handleNameChange=(e)=>{
        setNameValue(e.target.value.toUpperCase())
    }
    const handleEmailChange=(e)=>{
        setEmailValue(e.target.value)
    }


    const handleTelephoneChange=(e)=>{
        setTelephoneValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        const newUser={
            name:nameValue,
            email:emailValue,
            telephone:telephoneValue,
            service:props.service.join(", "),
            total:props.total

        }
        // const clone=JSON.parse(JSON.stringify(props.user))
        // clone.push(newUser)
        // props.setUser(clone)
        props.setUser([...props.user, newUser])
        console.log(newUser);
        
}
  return (
    <div className='user-form container'>
        <form onSubmit={handleSubmit}>
            <div>
                
                <input type="text" name='name' value={nameValue} onChange={handleNameChange} placeholder='name'/>
            </div>

            <div>
               
                <input type="text" name="email" value={emailValue} onChange={handleEmailChange} placeholder='email'/>
            </div>

            <div>
                <input type="text" name="telephone" placeholder='telephone'  value={telephoneValue} onChange={handleTelephoneChange}/>
            </div>

            <button>get budget</button>
        </form>
    </div>
  )
}

export default UserForm

