import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {HomePage} from '../pages/HomePage'
import {PastryPage} from '../pages/navigationpages/PastryPage'
import {ContactUsPage} from '../pages/navigationpages/ContactUsPage'
import {SignInPage} from '../pages/navigationpages/SignInPage'
import RoutingPath from './RoutingPath'
import {UserContext} from '../shared/provider/UserProvider'
import React,{useContext, useEffect} from 'react'

export const Routes = ({children}) => {
    const [autUser, setAutUser] = useContext(UserContext)

    const chekIfUserAut = () => {
        const getLocalStorageUser = localStorage.getItem('username')
        const getLocalStoragePassword = localStorage.getItem('password')
        if (getLocalStorageUser) {
            setAutUser(getLocalStorageUser)
        }
    }

    useEffect(() => {
        chekIfUserAut()
    })

    return (
        <Router>
        {children}
            <Switch>
                <Route exact path={RoutingPath.pastryPage} component ={PastryPage} />
                <Route exact path={RoutingPath.contactUsPage} component ={ContactUsPage} />
                <Route exact path={RoutingPath.signInPage} component ={SignInPage} />
                <Route component ={HomePage} />
            </Switch>
        </Router>
    )
}

