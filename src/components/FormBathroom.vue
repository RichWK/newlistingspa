<template>

  <FormInput
    fType="number"
    label="Number of pieces"
    name="numberOfPieces"
    @change="onChange"
  />
  <FormDropdown
    label="Floor"
    optionLabel="floor"
    :filter="false"
    :options="floors"
    @change="onChange"
  />
  <FormDropdown
    label="En-suite?"
    optionLabel="ensuite"
    :filter="false"
    :options="ensuite"
    @change="onChange"
  />

</template>



<script>

import FormDropdown from './FormDropdown.vue'
import FormInput from './FormInput.vue'

export default {
  
  name: 'FormBathroom',
  components: {
    'FormDropdown': FormDropdown,
    'FormInput': FormInput
  },
  data () {
    return {
      'ensuite': [
         { "ensuite": 'Yes' },
         { "ensuite": 'No' }
      ],
      'floors': [
         { "floor": 'Main' },
         { "floor": 'Above' },
         { "floor": 'Below' },
         { "floor": 'Basement' }
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

