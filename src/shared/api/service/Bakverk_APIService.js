import http from '../Bakverk_API'

const getAllData = () => {
    return http.get('/pastry')
}

export default { getAllData}