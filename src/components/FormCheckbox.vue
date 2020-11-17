<template>
  
  <div class="container" v-for="option in options" :key="option.name">
  
    <PrimeCheckbox
      :id="option.name"
      v-model="testing"
      :value="option.friendlyName"
      :name="name"
    />
    <label :for="option.name">{{ option.friendlyName }}</label>

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
      'testing': [] 
    }
  },
  props: {
    'friendlyName': String,
    'fType': String,
    'name': String,
    'options': Array
  }
}

</script>



<style scoped>

.container {

  display: inline-block;
  margin-bottom: 20px;
}

.p-checkbox {

  margin-right: 10px;
}

label {

  margin-right: 20px;
}

</style>

