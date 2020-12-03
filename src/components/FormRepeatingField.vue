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
  
  name: 'FormRepeatingField',
  components: {
    'FormRoom': FormRoom
  },
  data () {
    return {
      'count': 3,
      'userInputs': { rooms: {} }
    }
  },
  emits: ['change'],
  methods: {
    onChange(newInput) {
      this.userInputs.rooms = { ...this.userInputs.rooms, ...newInput };
      this.$emit( 'change', this.userInputs );
    }
  }
}

</script>



<style scoped>



</style>

