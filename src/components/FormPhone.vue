<template>
  
  <input type="tel" :name="name" :placeholder="friendlyName">

</template>



<script>

export default {
  
  name: 'InputPhone',
  props: [
    'friendlyName',
    'name'
  ]
}

</script>



<style scoped>



</style>