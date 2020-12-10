<template>

  <div
    v-for="n in repetitions"
    :key="n"
  >

    <FormBathroom
      v-if="name == 'bathrooms'"
      :index="n"
      @change="onChange"
    />
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

import FormBathroom from './FormBathroom.vue'
import FormOpenHouse from './FormOpenHouse.vue'
import FormRoom from './FormRoom.vue'

export default {
  
  name: 'FormRepeatingField',
  components: {
    'FormBathroom': FormBathroom,
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

