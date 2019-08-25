import axios from 'axios'
class FlightAPI {
    constructor() {
        this.flightAPI = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    getFlight(from ,to) {
        const url = `/flights/routes/${from}/${to}`
        return this.flightAPI.get(url)
    }
}

module.exports = {
    FlightAPI
}