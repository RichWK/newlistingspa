<template>
  
  <PrimeDropdown
    v-model="userInputAsObject"
    :filter="filter"
    :options="options"
    :optionLabel="optionLabel"
    :placeholder="label"
    @change="onChange"
  />

</template>



<script>

import Dropdown from 'primevue/dropdown';

export default {
  
  name: 'FormDropdown',
  components: {
    'PrimeDropdown': Dropdown
  },
  data () {
    return {
      'userInputAsObject': null
    }
  },
  emits: ['change'],
  methods: {
    onChange() {
      this.$emit('change', this.userInputAsObject);
    }
  },
  props: {
    'filter': {
      type: Boolean,
      default: true
    },
    'label': String,
    'name': String,
    'options': Array,
    'optionLabel': {
      type: String,
      default: 'name'
    }
  }
}

</script>



<style scoped>

.p-dropdown {

  min-width: 216px;
  margin-right: 12px;
  margin-bottom: 20px;
}

</style>

<style>

.p-dropdown-panel div.p-dropdown-header {

  padding: 0;
}

</style>