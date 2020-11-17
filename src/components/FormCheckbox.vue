<template>
  
  <div class="container">
  
    <PrimeCheckbox
      :id="name"
      v-model="testing"
      :value="friendlyName"
      :name="name"
    />
    <label :for="name">{{ friendlyName }}</label>

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
  props: [
    'friendlyName',
    'name'
  ]
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

