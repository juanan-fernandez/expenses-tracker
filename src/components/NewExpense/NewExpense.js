import { useState } from 'react';
import { nanoid } from 'nanoid';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense({ onAddExpense }) {
	const saveExpenseHanler = expenseData => {
		const exp = {
			id: nanoid(),
			...expenseData,
		};
		onAddExpense(exp);
	};

	const [viewForm, setViewForm] = useState(false);
	const handleViewForm = () => {
		setViewForm(prev => !prev);
	};

	return (
		<div className='new-expense'>
			{!viewForm && <button onClick={handleViewForm}>Add Expense</button>}
			{viewForm && (
				<ExpenseForm onSaveExpense={saveExpenseHanler} onStopEditing={handleViewForm} />
			)}
		</div>
	);
}
