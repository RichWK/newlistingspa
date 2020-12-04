<template>
  
  <PrimeCalendar
    v-model="userInput"
    dateFormat="MM d, yy"
    showIcon
    @date-select="onSelection"
  />

</template>



<script>

import Calendar from 'primevue/calendar';

export default {
  
  name: 'FormDate',
  components: {
    'PrimeCalendar': Calendar
  },
  computed: {
    userInputAsObject() {
      return { [this.name]: this.userInput }
    }
  },
  data () {
    return {
      userInput: null
    }
  },
  emits: ['change'],
  methods: {
    onSelection() {
      this.$emit( 'change', this.userInputAsObject );
    }
  },
  props: {
    'name': String
  }
}

</script>



<style scoped>

.p-calendar {

  margin-bottom: 20px;
}

</style>