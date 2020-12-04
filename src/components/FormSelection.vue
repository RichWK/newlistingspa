<template>

  <div class="selectionFields">
  
    <div class="container" v-for="option in options" :key="option.name">
    
      <label :for="option.name">{{ option.label }}</label>

      <PrimeCheckbox
        v-if="fType === 'checkbox'"
        v-model="userInput"
        v-bind="$attrs"
        :id="option.name"
        :name="name"
        :value="option.label"
        @change="onChange"
      />
      <PrimeRadio
        v-if="fType === 'radio'"
        v-model="userInput"
        v-bind="$attrs"
        :id="option.name"
        :name="name"
        :value="option.label"
        @change="onChange"
      />

    </div>

  </div>

</template>



<script>

import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';

export default {
  
  name: 'FormSelection',
  components: {
    'PrimeCheckbox': Checkbox,
    'PrimeRadio': RadioButton
  },
  computed: {
    userInputAsObject() {
      return { [this.name]: this.userInput }
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
      this.$emit( 'change', this.userInputAsObject );
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

.selectionFields {

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

/* This rule ensures that mousing over labels also triggers the hover effect. */

label:hover + div.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box,
label:hover + div.p-radiobutton:not(.p-disabled) .p-radiobutton-box {

  border-color: #4caf50;
}

</style>

