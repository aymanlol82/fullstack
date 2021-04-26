import   { useState , createContext} from 'react'

export const APIContext = createContext( null)

export const APIProvider = ({children}) => {
    const [data, setData] = useState()


    return (
        <APIContext.Provider value ={[data,setData]}>

        {children}

        </APIContext.Provider >
    )
}
