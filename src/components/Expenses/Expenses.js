import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import data from '../../data/expensesData';
import Card from '../Card/Card';

export default function Expenses() {
	return (
		<Card className='expenses-list'>
			{data.map(expense => (
				<ExpenseItem key={expense.id} expense={{ ...expense }} />
			))}
		</Card>
	);
}
