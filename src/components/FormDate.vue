<template>
  
  <PrimeCalendar
    v-model="userInput"
    dateFormat="MM d, yy"
    showIcon
    @change="onChange"
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
  },
  emits: ['new-user-input'],
  methods: {
    onChange() {
      this.$emit( 'new-user-input',
        {
          name: this.name,
          value: this.userInput
        }
      );
    }
  }
}

</script>



<style scoped>

.p-calendar {

  margin-bottom: 10px;
}

</style>