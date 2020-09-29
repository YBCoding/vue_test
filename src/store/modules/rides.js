import ridesRepository from '../../api/ridesRepository'
// initial state
const state = () => ({
    rides: [],
    error: false
});

// actions
const actions = {
    getAllRides({commit}) {
        ridesRepository.getRides()
            .then(({ data }) => {
                commit('setRides', data)
            })
            .catch(() => {
                //TODO This should be handled with loading failure
                commit('setError', true);
            })
    },
    getRideCost({commit}, id) {
        ridesRepository.getRideCost(id)
            .then(({ data }) => commit('setRideCost', { id, cost: data }))
            .catch(() => {
                //TODO This should be handled with loading failure
                commit('setError', true);
            })
    }
};

// mutations
const mutations = {
    setRides (state, rides) {
        state.rides = rides.map(ride => ({...ride, cost: null}));
        state.loading = true
    },
    setRideCost (state, { id, cost }) {
        const ride = state.rides.find(ride => ride.id === id);
        ride.cost = cost
    },
    setError (state, inError) {
        state.error = inError
    }
};



export default {
    namespaced: true,
    state,
    actions,
    mutations
}