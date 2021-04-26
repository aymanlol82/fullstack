import http from '../StarWarsAPI'

const getStarWarsPersonens = (id?:number | string) => {

    return http.get (id)
}

export default {
    getStarWarsPersonens
}