import   { useState , createContext} from 'react'

export const UserContext = createContext( )

export const UserProvider = ({children}) => {
    const [autUser, setAutUser] = useState()


    return (
        <UserContext.Provider value ={[autUser,setAutUser]}>
        {children}

        </UserContext.Provider >
    )
}

