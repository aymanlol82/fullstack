import { useState, useEffect } from 'react'


export const useDebounce = ( value : string , delay :number)  => {

    const [debounceValue , setDebounceValue] = useState(value)

    useEffect (() => {
        const handlar = setTimeout(() => { 
            setDebounceValue(value)
        }, delay)
        return () => {clearTimeout(handlar)}
    }, [value])

    return debounceValue

}
