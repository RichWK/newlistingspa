<template>

  <!-- Future to-do for the data:
  
  - Add a 'rules' attribute, e.g. "max 2 selected", etc.
  - Fields need to be able to define a pattern, especially for number fields.
  - Do fields need the ability to specify notes? e.g. first page, 'Age Type'

  For the design:

  - Look at SimpleTax for inspiration?
  - New field types?
    - Currency?
    - Textarea
    - PrimeVue toggle button for switching between feet and metres, etc?
    - Decimal?
    - North, South, etc dropdown?
  - Merge <FormRadio> into <FormCheckbox>, name it <FormSelection>.
  - Filter subsequent fields based on property type! Simplifies for the user
  
  -->

  <h1>Create a new listing</h1>

  <form>

    <FieldGroup
      v-for="group in groups"
      :key="group.name"
      :name="group.name"
      :fields="group.fields"
      @new-user-input="storeUserInputs"
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

        if (value.length <= 0 ) { delete this.userInputs[key] }
      }
    }
  },
  mounted() {
    this.groups = Schema
  }
}

</script>

