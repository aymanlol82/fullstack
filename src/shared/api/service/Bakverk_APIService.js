import http from '../Bakverk_API'

const getAllData = () => {
    return http.get('/pastry')
}

const createUser = (userData) => {
    return http.post('/user' , userData)
}

const getUser = () => {
    return http.get('/user')
}

export default {
    getAllData,
    createUser,
    getUser
}