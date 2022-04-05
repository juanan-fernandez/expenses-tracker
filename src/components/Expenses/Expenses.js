import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

export default function Expenses({ expenses }) {
	const getCurrentYear = () => new Date().getFullYear();

	const [filterYear, setFilterYear] = useState(getCurrentYear());

	const filterChangeHandler = yearValue => {
		setFilterYear(yearValue);
	};

	const getExpensesByYear = year => {
		if (filterYear === '*') return expenses;
		return expenses.filter(e => e.fecha.getFullYear() === +filterYear);
	};

	const filteredExpenses = getExpensesByYear();

	return (
		<Card className='expenses-list'>
			<ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList expenses={filteredExpenses} />
		</Card>
	);
}
