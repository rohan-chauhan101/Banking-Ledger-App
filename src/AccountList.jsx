import React from 'react'

function AccountList({account,getId,getIdforDisplay,searchId,setSearchId,searchResult,setSearchResult}) {

    let displayAccounts = searchResult.length > 0? searchResult : account;

    function handleSubmit(e){
        e.preventDefault();
        let foundUser = account.find(acc => acc.userid == Number(searchId))
        if(foundUser){
            setSearchResult([foundUser])
        }
        else{
            if(searchId == ""){
                setSearchResult([])
            }
            else{
                alert("user not found");
                setSearchResult([])
                setSearchId("")
            }
            
        }
    }

  return (
    <>
        <div >
            <form onSubmit={handleSubmit}>
                <input type="number" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
                <button type='submit'>🔍</button>
                <button type='button' onClick={() => {setSearchId(""); setSearchResult([])}}>clear</button>
            </form>
        </div>
       

        { 
          displayAccounts.map(user => {

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
    </>
  )
}``

export default AccountList