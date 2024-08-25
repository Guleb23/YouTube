import { useState } from 'react'

export const useCounter = (initial) => {
    const [count, setCount] = useState(initial);
    const incriment = () => {
        setCount(count + 1);
    }
    const decriment = () => {
        setCount(count - 1);
    }
    const toZero = () => {
        setCount(0);
    }

    return { count, incriment, decriment, toZero }
}