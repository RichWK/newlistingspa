<template>
  
  <PrimeDropdown
    v-model="testing"
    :placeholder="friendlyName"
    :options="dropdownOptions"
    optionLabel="name"
    filter
  />

</template>



<script>

import Dropdown from 'primevue/dropdown';

export default {
  
  name: 'FormCheckbox',
  components: {
    'PrimeDropdown': Dropdown
  },
  data () {
    return {
      'testing': null
    }
  },
  props: [
    'dropdownOptions',
    'friendlyName',
    'name'
  ]
}

</script>



<style scoped>

.p-dropdown {

  min-width: 216px;
  margin-right: 12px;
  margin-bottom: 20px;
}


</style>

