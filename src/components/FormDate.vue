<template>

  <!--

  <PrimeCalendar> requires two event listeners because:
  
    - @change only fires when the field is cleared or modified manually
    - @date-select only fires when a date is selected from the calendar

  -->
  
  <PrimeCalendar
    v-model="userInput"
    dateFormat="MM d, yy"
    :showIcon="showIcon"
    @change="onChange"
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
      let input = this.userInput;
      if ( input instanceof Date ) {
        let dateString =
          input.getFullYear()
          + '-'
          + ( input.getMonth() + 1 )
          + '-'
          + input.getDate();
        return { [this.name]: dateString }
      }
      else {
        return { [this.name]: input }
      }
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
    'name': {
      type: String,
      default: 'date'
    },
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
  margin-right: 12px;
  width: 250px;
}

</style>