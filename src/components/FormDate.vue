<template>
  
  <PrimeCalendar
    v-model="userInput"
    dateFormat="MM d, yy"
    :showIcon="showIcon"
    @date-select="onChange"
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
    onChange() {
      this.$emit( 'change', this.userInputAsObject );
    }
  },
  props: {
    'name': String,
    'showIcon': {
      type: Boolean,
      default: true
    }
  }
}

</script>



<style scoped>

.p-calendar {

  margin-bottom: 20px;
  width: 250px;
}

</style>