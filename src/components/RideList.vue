<template>
    <div v-if="error">
        Oh no 😢 Something went wrong
    </div>
    <div v-else>
        <ride-list-item v-for="ride in rides" :ride="ride" :key="ride.id" class="rideList"/>
    </div>
</template>

<style scoped>
    .rideList {
        display: flex;
        flex-direction: column;
    }
</style>

<script>
    import store from '../store'
    import RideListItem from './RideListItem';

    export default {
        components: {RideListItem},
        computed: {
            rides() {
                return this.$store.state.rides.rides
            },
            error() {
                return this.$store.state.rides.error
            }
        },
        created() {
            store.dispatch('rides/getAllRides')
        }
    }
</script>