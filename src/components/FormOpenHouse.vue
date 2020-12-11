<template>

  <FormDropdown
    :filter="false"
    optionLabel="type"
    :options="types"
    placeholder="Open house or tour?"
    @change="onChange"
  />
  <FormDate
    placeholder="Date"
    :showIcon="false"
    @change="onChange"
  />
  <FormDropdown
    :filter="false"
    optionLabel="time"
    :options="times"
    placeholder="Starting at"
    @change="onChange"
  />
  <FormDropdown
    :filter="false"
    optionLabel="time"
    :options="times"
    placeholder="Ending at"
    @change="onChange"
  />
  <FormDropdown
    :filter="false"
    optionLabel="refreshment"
    :options="refreshments"
    placeholder="Refreshments?"
    @change="onChange"
  />

</template>



<script>

import FormDate from './FormDate.vue'
import FormDropdown from './FormDropdown.vue'

export default {
  
  name: 'FormOpenHouse',
  components: {
    'FormDate': FormDate,
    'FormDropdown': FormDropdown
  },
  data () {
    return {
      'refreshments': [
         { "refreshment": 'Yes' },
         { "refreshment": 'No' }
      ],
      'times': [
        { "time": '8:00 am' },
        { "time": '8:15 am' },
        { "time": '8:30 am' },
        { "time": '8:45 am' },
        { "time": '9:00 am' },
        { "time": '9:15 am' },
        { "time": '9:30 am' },
        { "time": '9:45 am' },
        { "time": '10:00 am' },
        { "time": '10:15 am' },
        { "time": '10:30 am' },
        { "time": '10:45 am' },
        { "time": '11:00 am' },
        { "time": '11:15 am' },
        { "time": '11:30 am' },
        { "time": '11:45 am' },
        { "time": '12:00 pm' },
        { "time": '12:15 pm' },
        { "time": '12:30 pm' },
        { "time": '12:45 pm' },
        { "time": '1:00 pm' },
        { "time": '1:15 pm' },
        { "time": '1:30 pm' },
        { "time": '1:45 pm' },
        { "time": '2:00 pm' },
        { "time": '2:15 pm' },
        { "time": '2:30 pm' },
        { "time": '2:45 pm' },
        { "time": '3:00 pm' },
        { "time": '3:15 pm' },
        { "time": '3:30 pm' },
        { "time": '3:45 pm' },
        { "time": '4:00 pm' },
        { "time": '4:15 pm' },
        { "time": '4:30 pm' },
        { "time": '4:45 pm' },
        { "time": '5:00 pm' },
        { "time": '5:15 pm' },
        { "time": '5:30 pm' },
        { "time": '5:45 pm' },
        { "time": '6:00 pm' },
        { "time": '6:15 pm' },
        { "time": '6:30 pm' },
        { "time": '6:45 pm' },
        { "time": '7:00 pm' },
        { "time": '7:30 pm' },
        { "time": '7:45 pm' },
        { "time": '8:00 pm' },
        { "time": '8:15 pm' },
        { "time": '8:30 pm' },
        { "time": '8:45 pm' },
        { "time": '9:00 pm' },
        { "time": '9:15 pm' },
        { "time": '9:30 pm' },
        { "time": '9:45 pm' },
        { "time": '10:00 pm' },
        { "time": '10:15 pm' },
        { "time": '10:30 pm' },
        { "time": '10:45 pm' },
        { "time": '11:00 pm' },
        { "time": '11:15 pm' },
        { "time": '11:30 pm' },
        { "time": '11:45 pm' },
        { "time": '12:00 am' },
        { "time": '12:15 am' },
        { "time": '12:30 am' },
        { "time": '12:45 am' },
        { "time": '1:00 am' },
        { "time": '1:15 am' },
        { "time": '1:30 am' },
        { "time": '1:45 am' },
        { "time": '2:00 am' },
        { "time": '2:15 am' },
        { "time": '2:30 am' },
        { "time": '2:45 am' },
        { "time": '3:00 am' },
        { "time": '3:15 am' },
        { "time": '3:30 am' },
        { "time": '3:45 am' },
        { "time": '4:00 am' },
        { "time": '4:15 am' },
        { "time": '4:30 am' },
        { "time": '4:45 am' },
        { "time": '5:00 am' },
        { "time": '5:15 am' },
        { "time": '5:30 am' },
        { "time": '5:45 am' },
        { "time": '6:00 am' },
        { "time": '6:15 am' },
        { "time": '6:30 am' },
        { "time": '6:45 am' },
        { "time": '7:00 am' },
        { "time": '7:15 am' },
        { "time": '7:30 am' },
        { "time": '7:45 am' }
      ],
      'types': [
         { "type": 'Open house' },
         { "type": 'Tour' }
      ],
      userInputs: {}
    }
  },
  emits: ['change'],
  methods: {
    onChange(newInput) {
      this.userInputs[this.index] = { ...this.userInputs[this.index], ...newInput }
      this.$emit( 'change', this.userInputs );
    }
  },
  props: {
    index: Number
  }
}

</script>



<style scoped>



</style>

