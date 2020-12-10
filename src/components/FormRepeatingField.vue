<template>

  <div
    v-for="n in repetitions"
    :key="n"
  >

    <FormOpenHouse
      v-if="name == 'openHouses'"
      :index="n"
      @change="onChange"
    />
    <FormRoom
      v-if="name == 'rooms'"
      :index="n"
      @change="onChange"
    />

  </div>

</template>



<script>

import FormOpenHouse from './FormOpenHouse.vue'
import FormRoom from './FormRoom.vue'

export default {
  
  name: 'FormRepeatingField',
  components: {
    'FormOpenHouse': FormOpenHouse,
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
      'userInputs': { [this.name]: {} }
    }
  },
  emits: ['change'],
  methods: {
    onChange(newInput) {
      let type = this.name;
      this.userInputs[type] = { ...this.userInputs[type], ...newInput };
      this.$emit( 'change', this.userInputs );
    }
  },
  props: {
    'name': {
      type: String,
      required: true
    },
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

