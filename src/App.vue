<template>

  <header>

    <img src="./assets/logo.png">

  </header>

  <div class="title">

    <h1>Create a new listing</h1>

    <p>Fill out this form and submit your new listing directly to our Paragon MLS system.</p>

  </div>

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

  header {

    margin-bottom: 35px;
  }

  header img {

    background-color: #1fad58;
    padding: 25px 50px;
  }

  .title {

    margin-bottom: 35px;
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 10px;
    border-left: 5px solid #f8e729;
  }

  h1 {

    font-family: "Merriweather", serif;
    font-size: 32px;
    margin: 0;
    margin-bottom: 20px;
  }

</style>

