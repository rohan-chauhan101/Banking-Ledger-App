import React, { useEffect, useState } from 'react'

function TransactionForm({account,selectedId, addTransaction,setSelectedId}) {

    const initialState = {
        type : "credit",
        amount : 0
    }

    const [transaction, setTransaction] = useState(initialState);

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setTransaction(prev => ({...prev, 
            [name] : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();

        if(transaction.amount <= 0){
          return
        }
         
        const finalAmount = transaction.type == "debit" ? Number(transaction.amount)*-1 : Number(transaction.amount);
        const tempTransaction = {
            // userid : selectedId,
            tnId : Date.now(),
            type : transaction.type,
            amount : finalAmount,
            date : new Date().toISOString().split("T")[0]
        }
        console.log(finalAmount);
        
        addTransaction(tempTransaction);

        setTransaction(initialState);
    }

  return (
    <>
    <button onClick={() => setSelectedId(null)}>close</button>
   <form onSubmit = {handleSubmit}>
     
     <label>
    <input
      type="radio"
      name="type"
      value="debit"
      checked={transaction.type === "debit"}
      onChange={handleChange}
    />
    Debit
  </label>

  <label>
    <input
      type="radio"
      name="type"
      value="credit"
      checked={transaction.type === "credit"}
      onChange={handleChange}
    />
    Credit
  </label>
    <input name='amount' type="number" placeholder='amount' value={transaction.amount} onChange={handleChange}/>

    <button type='submit'>add transaction</button>
    </form>
    </>
  )
}

export default TransactionForm