import React from 'react';
import Add from './Add';
import List from './List';

function Income() {

	const incomes = JSON.parse(localStorage.getItem('income'));

	let list = incomes ? Object.values(incomes) : [{}];
	
	
	
	return (
		<>
			<Add/>
			<div className='row'>
			{
				list != null ? list.map((data, index) => <List key={index} source={data?.source} amount={data?.amount} entryDate={data?.entryDate}/>) : ""	
			}
			</div>
		</>
	);
}

export default Income;
