<template>

  <div class="checkboxFields">
  
    <div class="container" v-for="option in options" :key="option.name">
    
      <label :for="option.name">{{ option.label }}</label>

      <PrimeCheckbox
        v-model="userInput"
        v-bind="$attrs"
        :id="option.name"
        :name="name"
        :value="option.name"
        @change="onChange"
      />

    </div>

  </div>

</template>



<script>

import Checkbox from 'primevue/checkbox';

export default {
  
  name: 'FormCheckbox',
  components: {
    'PrimeCheckbox': Checkbox
  },
  data () {
    return {
      'userInput': [] 
    }
  },
  emits: ['new-user-input'],
  methods: {
    onChange() {
      this.$emit( 'new-user-input',
        {
          name: this.name,
          value: this.userInput
        }
      );
    }
  },
  props: {
    'label': String,
    'fType': String,
    'name': String,
    'options': Array
  }
}

</script>



<style scoped>

.checkboxFields {

  margin-bottom: 15px;
  padding-left: 2px;
}

.container {

  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 16px;
}

label {

  padding: 5px;
  padding-left: 10px;
  margin-right: 20px;
}

</style>



<style>

/* Unscoped. */

label:hover + div.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box {

  border-color: #4caf50;
}

</style>

