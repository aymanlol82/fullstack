import {Routes} from './routes/Routes'
import {Navigation} from './components/navigation/Navigation'
import {UserProvider} from './shared/provider/UserProvider'
import {APIProvider} from './shared/provider/APIProvider'

export const App = () => {
  return (
    <UserProvider>
     <APIProvider>
       <Routes>
            <Navigation/>
       </Routes>  
      </APIProvider>        
    </UserProvider>   

  )
}

