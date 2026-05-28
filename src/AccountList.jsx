import React from 'react'

function AccountList({account,getId,getIdforDisplay}) {
  return (
    <div>AccountList

        {
            account.map(user => {

                const balance = user.transactionHistory.reduce((acc,t) => acc+t.amount , 0)
           
                return(
                     <div key={user.userid} style={{border : '2px solid black' , height : "200px"}}>
                    <h3>{`${user.firstName} ${user.lastName}`}</h3>
                    <p>{`user id : ${user.userid}`}</p>
                    <p>{`current balance : ${balance}`}</p>
                    <button onClick={() => {getId(user.userid);}}>Add transaction</button>
                    <button onClick={() => {getIdforDisplay(user.userid);}}>view Transactions</button>
                </div>
                );
            })
        }
    </div>
  )
}``

export default AccountList