<template>

  <div
    v-for="n in repetitions"
    :key="n"
  >

    <FormRoom
      v-if="name == 'rooms'"
      :index="n"
      @change="onChange"
    />

  </div>

</template>



<script>

import FormRoom from './FormRoom.vue'

export default {
  
  name: 'FormRepeatingField',
  components: {
    'FormRoom': FormRoom
  },
  computed: {
    repetitions () {
      return this.fieldsRequested > this.maximum ? this.maximum : this.fieldsRequested;
    }
  },
  data () {
    return {
      'fieldsRequested': 3,
      'userInputs': { rooms: {} }
    }
  },
  emits: ['change'],
  methods: {
    onChange(newInput) {
      this.userInputs.rooms = { ...this.userInputs.rooms, ...newInput };
      this.$emit( 'change', this.userInputs );
    }
  },
  props: {
    'name': String,
    'fType': {
      type: String,
      required: true
    },
    'maximum': Number
  }
}

</script>



<style scoped>



</style>

