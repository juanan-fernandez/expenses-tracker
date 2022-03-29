import './Calender.css';

export default function Calendar({ date }) {
	const month = date.toLocaleDateString('es-ES', { month: 'long' });
	const day = date.toLocaleDateString('es-ES', { day: '2-digit' });
	const year = date.toLocaleDateString('es-ES', { year: 'numeric' });
	return (
		<div className='expense-item__date'>
			<div className='expense-item__date-month'>{month}</div>
			<div className='expense-item__date-day'>{day}</div>
			<div className='expense-item__date-year'>{year}</div>
		</div>
	);
}
