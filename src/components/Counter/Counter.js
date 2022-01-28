import React, {useReducer} from 'react';

const Counter = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'incr':
                return {...state, count: state.count + 1}
            case 'decr':
                return {...state, count: state.count - 1}
            case 'reset':
                return {...state, count: action.payload}
            case 'incr2':
                return {...state, count2: state.count2 + 1}
            case 'decr2':
                return {...state, count2: state.count2 - 1}
            case 'reset2':
                return {...state, count2: action.payload}
            case 'incr3':
                return {...state, count3: state.count3 + 1}
            case 'decr3':
                return {...state, count3: state.count3 - 1}
            case 'reset3':
                return {...state, count3: action.payload}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0, count2: 0, count3: 0})
    return (
        <div>
            <div><h3>first counter : </h3>
                <div>Counter : {state.count}</div>
                <button onClick={() => dispatch({type: 'incr'})}>incr</button>
                <button onClick={() => dispatch({type: 'decr'})}>decr</button>
                <button onClick={() => dispatch({type: 'reset', payload: 0})}>reset</button>
            </div>
            <div><h3>second counter : </h3>
                <div>Counter : {state.count2}</div>
                <button onClick={() => dispatch({type: 'incr2'})}>incr</button>
                <button onClick={() => dispatch({type: 'decr2'})}>decr</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 0})}>reset</button>
            </div>
            <div><h3>third counter : </h3>
                <div>Counter : {state.count3}</div>
                <button onClick={() => dispatch({type: 'incr3'})}>incr</button>
                <button onClick={() => dispatch({type: 'decr3'})}>decr</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 0})}>reset</button>
            </div>
        </div>
    );
};

export default Counter;