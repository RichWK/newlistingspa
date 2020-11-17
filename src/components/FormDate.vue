<template>
  
  <PrimeCalendar
    v-model="calendarTest"
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
      calendarTest: null
    }
  }
}

</script>



<style scoped>

.p-calendar {

  margin-bottom: 10px;
}

</style>