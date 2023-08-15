/*Withdraw*/
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const withdrawTotalElement = document.getElementById('withdraw-amount');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    const newWithdraw = withdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdraw;

    const balanceTotalElement = document.getElementById('balance');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const updatedBalance = balanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = updatedBalance;

    withdrawField.value = '';
});

