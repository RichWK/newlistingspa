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
  margin-right: 10px;
  margin-bottom: 12px;
}

input {

  display: block;
  border-radius: 4px;
}

/* label {

  display: block;
  font-size: 11px;
  margin-left: 1px;
  margin-bottom: 5px;
} */

</style>

