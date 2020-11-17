<template>

  <div class="container" v-for="option in options" :key="option.name">

    <PrimeRadio
      :id="option.name"
      :name="name"
      :value="option.name"
      v-model="testing"
    />
    <label :for="option.name">{{ option.friendlyName }}</label>

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

.p-radiobutton {

  margin-right: 10px;
}

label {

  margin-right: 20px;
}

</style>

