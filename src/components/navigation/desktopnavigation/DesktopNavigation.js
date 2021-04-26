import './DesktopNavigation.css'
import RoutingPath from '../../../routes/RoutingPath'
import {useHistory} from 'react-router-dom'
import {Profile} from '../../profile/Profile'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'


export const DesktopNavigation = () => {
    const [autUser,] = useContext(UserContext)

     const history = useHistory()

     const IfAutuserSigin = () => {
       if (autUser) {
          return <span className='profileSigIn'><Profile/></span>
       } else {
          return  <span className='signInPage' onClick={() => history.push(RoutingPath.signInPage)}>Sign In</span> 
       }
    }

    return (
        <div className='desktopNavigationWrapper'>
			<span className='homePage' onClick={() => history.push(RoutingPath.homePage)}>Sweet</span>
            <span className='pastryPage' onClick={() => history.push(RoutingPath.pastryPage)}>Pastry</span>
            <span className='contactusPage' onClick={() => history.push(RoutingPath.contactUsPage)}>Contact Us</span>
            <span className='APIPage' onClick={() => history.push(RoutingPath.apiPage)}>API</span>
            {IfAutuserSigin()}
        </div>
    )
}
