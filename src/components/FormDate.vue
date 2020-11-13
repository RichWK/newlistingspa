<template>
  
  <PrimeCalendar
    v-model="calendarTest"
    dateFormat="dd MM yy"
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



</style>