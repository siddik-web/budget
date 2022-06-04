import React, { useEffect, useState } from 'react';
import Add from './Add';
import List from './List';

function Income() {

	const [list, setList] = useState([{}]);
	
	useEffect(() => {
		const incomes = JSON.parse(localStorage.getItem('income'));
		incomes ? setList(Object.values(incomes)) : setList([{}]);
	},[]);
	
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
