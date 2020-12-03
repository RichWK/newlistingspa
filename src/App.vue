<template>

  <h1>Create a new listing</h1>

  <form>

    <FieldGroup
      v-for="group in groups"
      :key="group.label"
      :label="group.label"
      :fields="group.fields"
      @change="storeUserInputs"
    />

  </form>

</template>



<script>

import FieldGroup from './components/FieldGroup.vue'
import Schema from "./assets/schema.json";

export default {

  name: 'App',
  components: {
    FieldGroup
  },
  data() {
    return {
      groups: [],
      userInputs: {}
    }
  },
  methods: {
    storeUserInputs( newInputs ) {
      
      // Add new input to any existing values.
      this.userInputs = { ...this.userInputs, ...newInputs };

      // Remove any blank values.
      for (const [key, value] of Object.entries( this.userInputs ) ) {

        if (value?.length <= 0 ) { delete this.userInputs[key] }
      }
    }
  },
  mounted() {
    this.groups = Schema
  }
}

</script>

<style scoped>

  h1 {

    margin-top: 10px;
    margin-bottom: 40px;
  }

</style>

