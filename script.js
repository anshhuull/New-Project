const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
renderExpenses();

expenseForm.addEventListener('submit', addExpense);

function addExpense(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (description === '' || isNaN(amount)) {
        return;
    }

    const expense = {
        description,
        amount,
        type
    };

    expenses.push(expense);
    saveExpensesToLocalStorage();
    renderExpenses();

    expenseForm.reset();
}

function saveExpensesToLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function renderExpenses() {
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <p><strong>Description:</strong> ${expense.description}</p>
            <p><strong>Amount:</strong> $${expense.amount.toFixed(2)}</p>
            <p><strong>Type:</strong> ${expense.type}</p>
            <button class="edit-button" onclick="editExpense(${index})">Edit</button>
            <button class="delete-button" onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(expenseItem);
    });
}

function editExpense(index) {
    // Implement edit functionality here
    console.log('Edit expense with index', index);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    saveExpensesToLocalStorage();
    renderExpenses();
}
