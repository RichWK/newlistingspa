<template>
  
  <input type="text" :name="name" :placeholder="friendlyName">

</template>



<script>

export default {
  
  name: 'InputText',
  props: [
    'friendlyName',
    'name'
  ]
}

</script>



<style scoped>



</style>