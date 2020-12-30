<template>

  <div
    v-for="n in repetitions"
    class="flex-container"
    :key="n"
  >

    <h3>{{ n }}</h3>

    <div class="container">
    
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

div.flex-container {

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
}

div.header-container + div.flex-container {

  margin-top: 10px;
}

div.flex-container:not(:last-of-type) {

  margin-bottom: 10px;
}

h3 {

  margin: 0;
  margin-top: 7px;
  margin-right: 15px;
  color: #1fad58;
}

</style>

