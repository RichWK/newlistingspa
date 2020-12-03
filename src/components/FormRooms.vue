<template>

  <FormRoom
    v-for="n in count"
    :index="n"
    :key="n"
    @change="onChange"
  />

</template>



<script>

import FormRoom from './FormRoom.vue'

export default {
  
  name: 'FormRooms',
  components: {
    'FormRoom': FormRoom
  },
  data () {
    return {
      'count': 1
    }
  },
  emits: ['change'],
  methods: {
    onChange(newInput) {
      this.$emit( 'change', newInput );
    }
  }
}

</script>



<style scoped>



</style>

