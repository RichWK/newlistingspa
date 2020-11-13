<template>
  
  <input type="text" :name="name" :placeholder="friendlyName">

</template>



<script>

export default {
  
  name: 'FormText',
  props: [
    'friendlyName',
    'name'
  ]
}

</script>



<style scoped>



</style>