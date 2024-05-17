import React, { useEffect, useState } from 'react';
import Component2 from '../Component_2/Component2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../store/userSlice';
import { increment } from '../../../store/counterSlice';



const Component1 = () => {

    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter.counter);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);


    return (
        <div>
            <h1>Component1</h1>
            <h1>{counter}</h1>
            <p><button onClick={() => dispatch(increment())}>Increment counter</button></p>
            <Component2 />
            
        </div>
    )
}

export default Component1;