import React from 'react';
import Calendar from '../Calender/Calender';
import './ExpenseItem.css';

export default function ExpenseItem({ expense }) {
	return (
		<div className='expense-item'>
			<Calendar date={expense.date} />
			<div className='expense-item__description'>
				<h2>{expense.title}</h2>
				<div className='expense-item__price'>{Number(expense.amount).toFixed(2)} EUR</div>
			</div>
		</div>
	);
}
