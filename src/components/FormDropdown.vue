<template>

  <div
    class="p-float-label"
  >
  
    <PrimeDropdown
      v-model="userInput"
      :filter="filter"
      :name="name"
      :options="options"
      :optionLabel="optionLabel"
      :showClear="showClearIcon"
      :inputId="name"
      @change="onChange"
    />
    <label :for="name">{{ label }}</label>

  </div>

</template>



<script>

import Dropdown from 'primevue/dropdown';

export default {
  
  name: 'FormDropdown',
  components: {
    'PrimeDropdown': Dropdown
  },
  computed: {
    userInputAsObject() {
      let key = this.userInput?.[this.optionLabel] ? this.userInput[this.optionLabel] : '';
      return { [this.name]: key }
    }
  },
  data () {
    return {
      'userInput': null
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