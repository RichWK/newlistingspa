<template>

  <div
    v-for="n in repetitions"
    :key="n"
  >

    <h3>{{ n }}</h3>
    
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
    fieldsRequested() {
      return Object.keys(this.userInputs[this.name]).length + 1;
    },
    repetitions () {
      return this.fieldsRequested > this.max ? this.max : this.fieldsRequested;
    }
  },
  data () {
    return {
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
    'max': Number
  }
}

</script>



<style scoped>

h3 {

  display: inline-block;
  margin-right: 12px;
  color: #1fad58;
}

</style>

