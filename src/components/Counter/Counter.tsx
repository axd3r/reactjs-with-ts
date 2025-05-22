import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    return (
        <div>
            <button onClick={increment}>Increment {count}</button>
        </div>
    )
}

export default Counter
