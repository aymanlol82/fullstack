import   './ProfileList.css'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'

export const ProfileList = () => {
    const [autUser,setAutUser] = useContext(UserContext)
    const history =useHistory()

    const logout =() =>{
        setAutUser (null)
        localStorage.removeItem ('username')
        history.push(RoutingPath.homePage)

    }
    return (
        <div className= 'profileListWrapper'>
            <span>UserName :{autUser}</span> <br/>
            <hr/>
            <span onClick={() => logout()}>Logout</span>
        </div>
    )
}
