import Chart from '../Chart/Chart';

export default function ExpensesChart({ expenses }) {
	const chart = [
		{ label: 'Jan', amount: 0 },
		{ label: 'Feb', amount: 0 },
		{ label: 'Mar', amount: 0 },
		{ label: 'Apr', amount: 0 },
		{ label: 'May', amount: 0 },
		{ label: 'Jun', amount: 0 },
		{ label: 'Jul', amount: 0 },
		{ label: 'Aug', amount: 0 },
		{ label: 'Sep', amount: 0 },
		{ label: 'Oct', amount: 0 },
		{ label: 'Nov', amount: 0 },
		{ label: 'Dec', amount: 0 },
	];

	for (const item of expenses) {
		const expenseMonth = item.fecha.getMonth(); //el mes me devuelve la posición en el array 0=Jan, 11=Dec
		chart[expenseMonth].amount += item.amount;
	}

	return (
		<>
			<Chart months={chart} />
		</>
	);
}
