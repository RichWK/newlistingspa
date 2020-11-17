<template>
  
  <input type="text" :name="name" :placeholder="friendlyName" inputmode="numeric" pattern="[0-9]">

</template>



<script>

export default {
  
  name: 'FormNumber',
  props: {
    'friendlyName': String,
    'name': String
  }
}

</script>



<style scoped>



</style>

