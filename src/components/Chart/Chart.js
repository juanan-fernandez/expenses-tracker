import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart({ months }) {
	const arrayAmounts = months.map(m => m.amount);
	const max = Math.max(...arrayAmounts);

	return (
		<div className='chart'>
			{months.map(data => (
				<ChartBar key={data.label} amount={data.amount} maxAmount={max} label={data.label} />
			))}
		</div>
	);
}
