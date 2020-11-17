<template>
  
  <div class="container p-float-label">
    
    <PrimeInputText
      :id="name"
      v-model="textTest"
      :type="textOrTel"
    />
    <label :for="name">{{ friendlyName }}</label>
    
  </div>

</template>



<script>

import InputText from 'primevue/inputtext';

export default {
  
  name: 'FormText',
  components: {
    'PrimeInputText': InputText
  },
  computed: {
    textOrTel() {
      // Adjusts <input> to accomodate phone number entry.
      return this.fType === 'phone' ? 'tel' : 'text'
    }
  },
  data () {
    return {
      textTest: null
    }
  },
  props: [
    'friendlyName',
    'fType',
    'name'
  ]
}

</script>



<style scoped>

.container {

  display: inline-block;
  margin-right: 12px;
  margin-bottom: 30px;
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

