import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {UserContext} from '../shared/provider/UserProvider'
import React,{useContext, useEffect} from 'react'
import {HomePage} from '../pages/HomePage'
import {PastryPage} from '../pages/navigationpages/PastryPage'
import {ContactUsPage} from '../pages/navigationpages/ContactUsPage'
import {SignInPage} from '../pages/navigationpages/SignInPage'
import { APIPage } from '../pages/navigationpages/APIPage'
import { RegisterPage } from '../pages/navigationpages/RegisterPage'
import RoutingPath from './RoutingPath'



export const Routes = ({children}) => {
    const [autUser, setAutUser] = useContext(UserContext)

    const chekIfUserAut = () => {
        const getLocalStorageUser = localStorage.getItem('username')
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
                <Route exact path={RoutingPath.apiPage} component ={APIPage} />
                <Route exact path={RoutingPath.registerPage} component ={RegisterPage} />
                <Route component ={HomePage} />
            </Switch>
        </Router>
    )
}

