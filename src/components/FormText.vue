<template>
  
  <div class="container p-float-label">

    
    <InputText :id="name" v-model="textTest" />
    <label :for="name">{{ friendlyName }}</label> 
    
  </div>

</template>



<script>

import InputText from 'primevue/inputtext';

export default {
  
  name: 'FormText',
  components: {
    'InputText': InputText
  },
  data () {
    return {
      textTest: null
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
  margin-top: 12px;
  margin-right: 10px;
  margin-bottom: 20px;
}

/* Adjusting PrimeVue floating label defaults. */

.p-float-label input:focus ~ label, .p-float-label input.p-filled ~ label, .p-float-label textarea:focus ~ label, .p-float-label textarea.p-filled ~ label, .p-float-label .p-inputwrapper-focus ~ label, .p-float-label .p-inputwrapper-filled ~ label {
  
    top: -.65rem;
    font-size: 11px;
    left: 0.2rem;
}

input {

  display: block;
  border-radius: 4px;
}

label {

  font-size: 14px;
}

</style>

