<template>
  
  <PrimeDropdown
    v-model="userInput"
    :placeholder="friendlyName"
    :options="options"
    optionLabel="name"
    filter
    @change="onChange"
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
      'userInput': null
    }
  },
  emits: ['new-user-input'],
  methods: {
    onChange() {
      this.$emit( 'new-user-input',
        {
          name: this.name,
          value: this.userInput.name
        }
      );
    }
  },
  props: {
    'friendlyName': String,
    'name': String,
    'options': Array
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

