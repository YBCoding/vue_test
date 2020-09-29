import ridesRepository from '../../api/ridesRepository'
// initial state
const state = () => ({
    rides: [],
});

// actions
const actions = {
    getAllRides({commit}) {
        ridesRepository.getRides()
            .then(({ data }) => {
                commit('setRides', data)
            })
    },
    getRideCost({commit}, id) {
        ridesRepository.getRideCost(id)
            .then(({ data }) => commit('setRideCost', { id, cost:data }))
    }
};

// mutations
const mutations = {
    setRides (state, rides) {
        state.rides = rides.map(ride => ({...ride, cost: null}));
    },
    setRideCost (state, { id, cost }) {
        const ride = state.rides.find(ride => ride.id === id);
        ride.cost = cost
    },
};



export default {
    namespaced: true,
    state,
    actions,
    mutations
}