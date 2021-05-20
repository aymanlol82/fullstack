import Axios from 'axios'

const API_URL ='http://localhost:3030'

const Bakver_API = Axios.create({
    baseURL : API_URL
})

export default Bakver_API