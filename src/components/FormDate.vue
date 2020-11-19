<template>
  
  <PrimeCalendar
    v-model="userInput"
    dateFormat="MM d, yy"
    showIcon
  />

</template>



<script>

import Calendar from 'primevue/calendar';

export default {
  
  name: 'FormDate',
  components: {
    'PrimeCalendar': Calendar
  },
  data () {
    return {
      userInput: null
    }
  }
}

</script>



<style scoped>

.p-calendar {

  margin-bottom: 10px;
}

</style>