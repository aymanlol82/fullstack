import RoutingPath from '../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/provider/UserProvider'
import Bakverk_APIService from '../../shared/api/service/Bakverk_APIService'
import {useState,useContext } from 'react'
import './RegisterPage.css'


export const RegisterPage = () => {
    const history = useHistory()
    const [newUser, setnewUser] = useState({username :'' , password:''})
    const [autUser, setAutUser] = useContext(UserContext)

    const signIn =() => {
        history.push (RoutingPath.signInPage)
    }

    const register = async () => {
        try{
            const {data} = await Bakverk_APIService.createUser(newUser)
            setAutUser()
            localStorage.setItem('username', newUser.username)
            localStorage.setItem('password', newUser.password)
            history.push (RoutingPath.homePage)

        } catch(error) {
            console.log(error)
            alert('user name or password is incorrect')
        }
    }


    return (
        <div className='registerWrapper' >
            <span>Username : </span> <input placeholder='Username' onChange={event => setnewUser({...newUser, username: event.target.value})}  /><br/> 
			<span>Password : </span> <input placeholder='password' type='password' onChange={event => setnewUser({...newUser, password: event.target.value})}  /><br/> 
            <button onClick={() => register()} > Register</button>
           	<h4>Do you already have an account?  </h4> 
			<button onClick={() => signIn()} > SignIn</button>
        </div>
    )
}
