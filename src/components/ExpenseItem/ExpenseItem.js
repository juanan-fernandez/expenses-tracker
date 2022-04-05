import Card from '../UI/Card/Card';
import Calendar from '../Calendar/Calendar';
import './ExpenseItem.css';

export default function ExpenseItem({ expense }) {
	return (
		<Card className='expense-item'>
			<Calendar date={expense.fecha} />
			<div className='expense-item__description'>
				<h2>{expense.title}</h2>
				<div className='expense-item__price'>{Number(expense.amount).toFixed(2)} EUR</div>
			</div>
		</Card>
	);
}
