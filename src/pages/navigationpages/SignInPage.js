import { useContext,useState,useEffect } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import Bakverk_APIService from '../../shared/api/service/Bakverk_APIService'
import './SignInPage.css'

export const SignInPage = () => {
	const history = useHistory()
	const [loginuser, setLoginUser] = useState({username :'' , password:''})
	const [getAllUser , setGetAllUser] = useState([])

	const [autUser, setAutUser] = useContext(UserContext)

	const UpdateUserAndPass = event => {
		setLoginUser({...loginuser,
		  [event.target.name]: event.target.value
		})
	}

	const fetchData = async () => {
		const {data} = await  Bakverk_APIService.getUser()
		setGetAllUser (data)
	}

	const displayData = () => {
        return(
            getAllUser.map((x) =>
            <div >  
                <h1> username : {x.username} </h1> 
            </div>)
            
        )
    }
    useEffect(() => {
		fetchData()
	}, [ ])

	const signIn =() => {
		if (loginuser.username.length > 4 && loginuser.password.length > 4) {
			setAutUser()
			localStorage.setItem('username', loginuser.username)
			localStorage.setItem('password', loginuser.password)
			history.push (RoutingPath.homePage)
		} else {
			alert('user name or password is incorrect')
		}
	}

	const register =() => {
		history.push (RoutingPath.registerPage)
	}

	useEffect(() => {
		setAutUser(null)
		localStorage.removeItem('username')
		localStorage.removeItem('password')
	})

	return (
		<div className='signInWrapper' >
			<span>Username : </span> <input placeholder='Username'  onChange={UpdateUserAndPass} name="username"  />
			<h1>{loginuser.username}</h1>
			<span>Password : </span> <input placeholder='password'  type='password' onChange={UpdateUserAndPass} name="password" />
			<h1>{loginuser.password}</h1><br/> 
			<button onClick={() => signIn()} > Sign in</button>
			<h5>Don't have an account?  </h5>
			<button onClick={() => register()} > Register</button>
			{displayData()}
		
		</div>
	)
}
