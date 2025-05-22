import { useReducer } from 'react'

type State = { count: number }
type Action = { type: 'increment' | 'decrement' }

const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(Reducer, { count: 0});

    return (
        <div>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}

export default CounterWithUseReducer
