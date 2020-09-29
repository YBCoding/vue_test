import axios from 'axios'

export default {
    getRides () {
        return axios.get('http://127.0.0.1:5000/rides')
    },

    getRideCost (id) {
        return axios.get(`http://127.0.0.1:5000/rides/${id}/cost`)
    }
}