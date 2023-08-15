/*Deposite */
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    const depositeTotalElement = document.getElementById('deposite-amount');
    const previousTotalString = depositeTotalElement.innerText;
    const previousTotal = parseFloat(previousTotalString);
    const newDeposite = previousTotal + newDepositeAmount;
    depositeTotalElement.innerText = newDeposite;

    const balanceTotalElement = document.getElementById('balance');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const updatedBalance = balanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = updatedBalance;

    depositeField.value = '';
});

