import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <section className='row'>
        <h2 className='text-center'>{count}</h2>
        <div className='btn btn-group'>
            <button onClick={() => dispatch(increment())} className="btn btn-primary">+</button>
            <button onClick={() => dispatch(decrement())} className="btn btn-danger">-</button>
        </div>
    </section>
  )
}

export default Counter