import React, { useState } from 'react'

function AddAccount({account,addAccount}) {

  const initialState = {
        firstName : "",
        lastName : "",
        age : "",
        mobile : ""
    }

    const [formData, setFormData] = useState(initialState)
    
    function handleChange(e){
         const name = e.target.name;
         const value = e.target.value;

         setFormData(prev => ({...prev,
            [name] : value
         }))

    }

    function handleSubmit(e){
        e.preventDefault()

      let lastId;

       if(account.length > 0){
        lastId =(account[account.length-1].userid) + 1
        }
        else{
          lastId = 1;
            }  

        const newAccount = {
            userid : lastId,
            firstName : formData.firstName,
            lastName : formData.lastName,
            age : Number(formData.age),
            mobile : formData.mobile,
            transactionHistory : []
        }

        console.log(lastId);
        
        
        addAccount(newAccount);
        setFormData(initialState)

    }

  return (
    <>
    
    <form onSubmit={handleSubmit} >

        <input name='firstName' type="text" placeholder='first Name' value={formData.firstName} onChange={handleChange}/>
        <input name='lastName' type="text" placeholder='last Name' value={formData.lastName} onChange={handleChange}/>
        <input name='age' type="text" placeholder='age' value={formData.age} onChange={handleChange}/>
        <input name='mobile' type="text" placeholder='mobile' value={formData.mobile} onChange={handleChange}/>

        <button type="submit">Add Account</button>
    </form>

    </>
  )
}

export default AddAccount