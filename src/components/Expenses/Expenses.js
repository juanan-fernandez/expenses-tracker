import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import data from '../../data/expensesData';

export default function Expenses() {
	return (
		<div className='expenses-list'>
			{data.map(expense => (
				<ExpenseItem key={expense.id} expense={{ ...expense }} />
			))}
		</div>
	);
}
