

 document.getElementById('deposit-btn').addEventListener('click',function(){
     // get value of input and parse
     const depositInput = document.getElementById('deposit-input')
     const depositInputText = depositInput.value
     const newDepositAmmount = parseFloat(depositInputText)
    
     // get deposit value and parse
     const depositTotal = document.getElementById('deposit-total')
     const depositTotalText = depositTotal.innerText
     const newDepositTotal = parseFloat(depositTotalText)
     
     // adding total + ammount as deposit inner text
     const totalDepositAmmount = newDepositTotal + newDepositAmmount
     depositTotal.innerText = totalDepositAmmount




     // get balance value and parse it float
     const totalBalance = document.getElementById('balance-total')
     const totalBalanceText = totalBalance.innerText
     const totalBalanceAmmount = parseFloat(totalBalanceText)

     // update balance and remove amount of withdraw
     const totalBalanceAvailable = (totalBalanceAmmount + newDepositAmmount)
     totalBalance.innerText = totalBalanceAvailable





     depositInput.value = ''

 })

 // widthraw get value and update inner text

 document.getElementById('withdraw-btn').addEventListener('click',function(){
     // get withdraw input value and parse it float
     const withdrawInput = document.getElementById('withdraw-input')
     const withdrawInputText = withdrawInput.value
     const newWithdrawAmmount = parseFloat(withdrawInputText)
     
     // get withdraw total inner text and parse it float
     const withdrawTotal = document.getElementById('withdraw-total')
     const withdrawTotalText = withdrawTotal.innerText
     const previousWithdrawTotal = parseFloat(withdrawTotalText)
     
     // set input value as withdraw totals inner text
     const totalWithdrawAmmount = (previousWithdrawTotal + newWithdrawAmmount)
     withdrawTotal.innerText = totalWithdrawAmmount




     // get balance value and parse it float
     const totalBalance = document.getElementById('balance-total')
     const totalBalanceText = totalBalance.innerText
     const totalBalanceAmmount = parseFloat(totalBalanceText)
     
     // update balance and remove amount of withdraw
     const totalBalanceAvailable = (totalBalanceAmmount - newWithdrawAmmount)
     totalBalance.innerText =  totalBalanceAvailable

     withdrawInput.value = ''
 })


