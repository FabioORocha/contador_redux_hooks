import React from 'react' 
import {useDispatch, useSelector} from 'react-redux' 

import {actions} from '../actions/counter'
import {selectors} from '../selectors/counter'



const Counter = () => {
    const counter = useSelector(selectors.getCounter)
    const dispatch = useDispatch()

    const handleDecrement = () =>dispatch(actions.decrement())
    const handleIncrement = () =>dispatch(actions.increment())

    return (
    <div>
        <h1>Contador: {counter}</h1>
        <ul>
            <li><button onClick={handleIncrement}>Incrementar</button></li>
            <li><button onClick={handleDecrement}>Decrementar</button></li>
        </ul>
    </div>
    )
}



export default Counter