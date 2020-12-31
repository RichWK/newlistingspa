<template>

  <header>

    <img src="./assets/logo.png">

  </header>

  <div class="title">

    <h1>Create a new listing</h1>

    <p>Fill out this form to submit a new residential listing directly to our Paragon MLS system. Detached, attached, apartments, multifamily (up to 4 units) and leasehold types are all supported &mdash; for all others, please submit a commercial listing.</p>

  </div>

  <form>

    <PrimeButton
      class="log-button p-button-rounded"
      label="Log to console"
      icon="pi pi-save"
      iconPos="right"
      @click="logToConsole"
    />

    <FieldGroup
      v-for="group in groups"
      :key="group.label"
      :label="group.label"
      :note="group.note"
      :fields="group.fields"
      @change="storeUserInputs"
    />

  </form>

</template>



<script>

import Schema from "./assets/schema.json";
import Button from 'primevue/button';
import FieldGroup from './components/FieldGroup.vue'

export default {

  name: 'App',
  components: {
    'PrimeButton': Button,
    FieldGroup
  },
  data() {
    return {
      groups: [],
      userInputs: {}
    }
  },
  methods: {
    logToConsole() {
      console.log( JSON.stringify( this.userInputs, null, 2 ) );
    },
    storeUserInputs( newInputs ) {
      
      // Add new input to any existing values.
      this.userInputs = { ...this.userInputs, ...newInputs };

      // Remove any blank values.
      for (const [key, value] of Object.entries( this.userInputs ) ) {

        if ( !value || value?.length <= 0 ) { delete this.userInputs[key] }
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
  
  p {

    line-height: 1.5;
  }

  .p-button.log-button {

    position: fixed;
    top: 20px;
    right: 35px;
    background: #1fad58;
    border-color: #1fad58;
  }

</style>

