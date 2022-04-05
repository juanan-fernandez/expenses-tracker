import './ExpensesFilter.css';

export default function ExpensesFilter({ onFilterChange, selected }) {
	function handleChange(ev) {
		onFilterChange(ev.target.value);
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by Year</label>
				<select value={selected} onChange={handleChange}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='*'>*</option>
				</select>
			</div>
		</div>
	);
}
