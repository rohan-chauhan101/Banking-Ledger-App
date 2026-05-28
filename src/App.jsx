import React, { useState } from 'react'
import AccountList from './AccountList'
import AddAccount from './AddAccount';
import TransactionForm from './Components/TransactionForm';

function App() {

const [account , setAccount ] = useState([
   {
      userid : 1,
      firstName : "Rohan",
      lastName : "Chauhan",
      age : 23,
      mobile : "8810227518",
      transactionHistory : []
    }
])

const [display, setDisplay] = useState(true) 

function addAccount(newAccount){
 
        const exists  = account.some(account => account.mobile == newAccount.mobile)

        if(exists) return;

        setAccount(prev => [...prev,newAccount])
}

  const [selectedId, setSelectedId] = useState(null)

  function getId(val){
    setSelectedId(Number(val))
  }

  function addTransaction(newTransaction){
    
    setAccount(prev => prev.map(acc => acc.userid == selectedId? {
      ...acc,
      transactionHistory : [...acc.transactionHistory,newTransaction]} : acc
  ))

  setSelectedId(null)
  }

  const [viewUserId, setViewUserId] = useState(null)

  function getIdforDisplay(userid){
    setViewUserId(Number(userid))
  }
  
  const selectedUser = account.find(acc => acc.userid == viewUserId);

  return (
    <div>
      {
        <button onClick={() => setDisplay(!display)}>{display? "add account" : "show accounts"}</button>
      }

      {
        display? <AccountList account={account} getId={getId} getIdforDisplay={getIdforDisplay} /> : <AddAccount account = {account} addAccount={addAccount}/>
      }
      

      {
        selectedId && <TransactionForm selectedId = {selectedId} addTransaction={addTransaction} setSelectedId ={setSelectedId}/>
      }
      
      {
        selectedUser && (<div>
           <button onClick={() => setViewUserId(null)}>Close</button>

      <table border="1"> 
        <thead>
          <tr> 
          <th>Trn id</th> 
          <th>Date</th> 
          <th>Amount</th> 
          <th>Type</th>
          </tr> 
        </thead>
      <tbody>

        {
          selectedUser.transactionHistory.map(t => (
            
            <tr key={t.tnId}>
              <td>{t.tnId}</td>
              <td>{t.date}</td>
              <td>{t.amount}</td>
               <td>{t.type}</td>
           </tr>

          ))
        }

      </tbody>

    </table>
        </div>

  )
      }
    </div>
  )
}

export default App