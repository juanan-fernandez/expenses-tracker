import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
export default function ExpensesList({ expenses, yearSelected }) {
	if (expenses.length === 0) return <p className='expenses-list__fallback'>No expenses yet!</p>;

	if (expenses.length > 0) {
		return (
			<ul className='expenses-ul-list'>
				{expenses.map(e => (
					<li key={e.id}>
						<ExpenseItem expense={{ ...e }} />
					</li>
				))}
			</ul>
		);
	}
}
