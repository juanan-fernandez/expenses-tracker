import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import data from './data/expensesData';

function App() {
	const [expenses, setExpenses] = useState(data);
	const addExpenseHandler = expense => {
		const newExpense = { ...expense, fecha: new Date(expense.fecha) };
		setExpenses(prev => [...prev, newExpense].sort((a, b) => a.fecha < b.fecha));
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
