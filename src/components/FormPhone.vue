<template>
  
  <input type="tel" :name="name" :placeholder="friendlyName">

</template>



<script>

export default {
  
  name: 'FormPhone',
  props: [
    'friendlyName',
    'name'
  ]
}

</script>



<style scoped>



</style>