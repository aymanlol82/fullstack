import { useContext,useState,useEffect } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import './SignInPage.css'

export const SignInPage = () => {
	const history = useHistory()

	const [loginuser, setLoginUser] = useState({username :'' , password:''})

	const [autUser, setAutUser] = useContext(UserContext)

	const UpdateUserAndPass = event => {
		setLoginUser({...loginuser,
		  [event.target.name]: event.target.value
		})
	}
		const signIn =() => {
			setAutUser()
			localStorage.setItem('username', loginuser.username)
			localStorage.setItem('password', loginuser.password)
			history.push (RoutingPath.homePage)
		}

	useEffect(() => {
        setAutUser(null)
		localStorage.removeItem('username')
		localStorage.removeItem('password')
	})

	return (
		<div className='signInWrapper' >
			<span>Username : </span> <input onChange={UpdateUserAndPass} name="username"  />
			<h1>{loginuser.username}</h1><br/>
			<span>Password : </span> <input onChange={UpdateUserAndPass} name="password" />
			<h1>{loginuser.password}</h1><br/> 
			<button onClick={() => signIn()} > Sign in</button>
		</div>
	)
}
