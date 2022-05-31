import React from 'react'

function List(props) {
const {source, amount, entryDate} = props;
  return (
    <>
        <div className='col-auto'>
            <div className='card'>
                <div className='card-body'>
                    <div>Income Source: {source}</div>
                    <div>Amount: {amount}</div>
                    <div>Entry Date: {entryDate}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default List