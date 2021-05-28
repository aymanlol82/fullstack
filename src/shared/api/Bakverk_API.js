import Axios from 'axios'

const productionAPI = 'https://bakverk-app-deploy.herokuapp.com'
const developmentAPI  ='http://localhost:5000'

const Bakver_API = Axios.create({
    baseURL : productionAPI
})

export default Bakver_API