<template>
  <div class="ride" v-on:click="displayTime" v-bind:class="{ aboveLimit: aboveLimit === true}">
    <span>{{ ride.id }} - {{ride.cost}}</span>
  </div>
</template>

<style scoped>
  .ride {
    border: solid black;
    margin-bottom: 1px;
    margin-top: 1px;
  }
  .aboveLimit {
    background-color: indianred;
  }
</style>

<script>


import store from '../store'
export default {
  props: {
    ride: Object,
  },

  computed: {
    aboveLimit() {
      return this.ride.distance > 2
    }
  },

  methods: {
    displayTime() {
      let ride_end_date = new Date(Date.parse(this.ride.startTime));
      ride_end_date = ride_end_date.setSeconds(ride_end_date.getSeconds() + this.ride.duration);
      ride_end_date = new Date(ride_end_date).toISOString();
      const duration = new Date(this.ride.duration * 1000)
              .toISOString()
              .substr(11, 8);

      alert(duration + ' - ' + ride_end_date);
    }
  },

  created() {
    store.dispatch('rides/getRideCost', this.ride.id)
  }
}
</script>
