<template>

  <div class="container">
  
    <PrimeRadio :id="name" :value="name" v-model="testing" />
    <label :for="name">{{ friendlyName }}</label>

  </div>

</template>



<script>

import RadioButton from 'primevue/radiobutton';

export default {
  
  name: 'FormRadio',
  components: {
    'PrimeRadio': RadioButton
  },
  data () {
    return {
      'testing': null 
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

.p-radiobutton {

  margin-right: 10px;
}

label {

  margin-right: 20px;
}

</style>