import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ onSaveExpense, onStopEditing }) {
	const initFormData = () => {
		return {
			title: '',
			amount: 0,
			fecha: new Date().toISOString().slice(0, 10),
		};
	};

	const [formData, setFormData] = useState(initFormData());

	function handleChange(ev) {
		let valor = ev.target.value;
		if (ev.target.type === 'number') valor = +ev.target.value;
		setFormData(prv => ({ ...prv, [ev.target.name]: valor }));
	}

	function handleCancel() {
		onStopEditing();
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		onSaveExpense(formData);
		setFormData(initFormData());
		onStopEditing();
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						placeholder='Insert a description'
						name='title'
						type='text'
						onChange={handleChange}
						value={formData.title}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						placeholder='0'
						name='amount'
						type='number'
						min='1'
						step='0.01'
						onChange={handleChange}
						value={formData.amount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='fecha'
						type='date'
						min='2019-01-01'
						max='2023-12-31'
						onChange={handleChange}
						value={formData.fecha}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button onClick={handleCancel}>Cancel</button>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add</button>
			</div>
		</form>
	);
}
