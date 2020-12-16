<template>
  
  <PrimeDropdown
    v-model="userInputAsObject"
    :filter="filter"
    :options="options"
    :optionLabel="optionLabel"
    :placeholder="label"
    :showClear="showClearIcon"
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
    },
    'showClearIcon': {
      type: Boolean,
      default: true
    }
  }
}

</script>



<style scoped>

.p-dropdown {

  min-width: 250px;
  margin-right: 12px;
  margin-bottom: 20px;
}

</style>



<style>

/* These are global. */

.p-dropdown-panel div.p-dropdown-header {

  padding: 0;
}

/* The styles below hide the dropdown icon once a value has been selected. */

i.p-dropdown-clear-icon {

  top: 0;
  margin-top: 0;
}

div.p-dropdown i.p-dropdown-clear-icon {

  right: 0;
  padding: 11px;
}

i.p-dropdown-clear-icon + div.p-dropdown-trigger {

  display: none;
}

</style>