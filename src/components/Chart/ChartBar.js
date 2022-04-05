import './ChartBar.css';

export default function ChartBar({ label, amount, maxAmount }) {
	const getFill = () => {
		if (maxAmount > 0) return Math.round((amount / maxAmount) * 100);
	};

	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div className='chart-bar__fill' style={{ height: `${getFill()}%` }}></div>
			</div>
			<div className='chart-bar__label'>{label}</div>
		</div>
	);
}
