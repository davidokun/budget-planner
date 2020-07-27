const reason = document.querySelector('#reason');
const amount = document.querySelector('#amount');
const btnClear = document.querySelector('#btn-clear');
const btnAdd = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    reason.value = "";
    amount.value = "";
}

btnAdd.addEventListener('click', () => {
    const enterReason = reason.value;
    const enterAmount = amount.value;

    if (enterReason.trim().lenght <= 0 ||
        enterAmount <= 0 ||
        enterAmount.trim().lenght <= 0) {
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enterReason + ": $" + enterAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enterAmount;
    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

btnClear.addEventListener('click', clear);