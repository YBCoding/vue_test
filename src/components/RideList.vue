<template>
    <div class="rideList">
        <RideListItem v-for="ride in rides" :ride="ride" :key="ride.id" />
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
        components: { RideListItem },
        computed: {
            rides () {
                return this.$store.state.rides.rides
            }
        },
        created() {
            store.dispatch('rides/getAllRides')
        }
    }
</script>