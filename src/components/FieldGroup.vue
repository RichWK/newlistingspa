<template>
  
  <div class="group">

    <h2>{{ label }}</h2>

    <template
      v-for="field in fields"
      :key="field.name"
    >

      <FormDate
        v-if="field.fType === 'date'"
        v-bind="field"
        @change="onChange"
      />
      <FormDropdown
        v-if="field.fType === 'dropdown'"
        v-bind="field"
        @change="onChange"
      />
      <FormInput
        v-if="inputFieldTypes.includes( field.fType )"
        v-bind="field"
        @change="onChange"
      />
      <FormRepeatingField
        v-if="repeatingFieldTypes.includes( field.fType )"
        v-bind="field"
        @change="onChange"
      />
      <FormSelection
        v-if="selectionFieldTypes.includes( field.fType )"
        v-bind="field"
        @change="onChange"
      />
      <FormTextarea
        v-if="field.fType === 'textarea'"
        v-bind="field"
        @change="onChange"
      />

    </template>

  </div>

</template>



<script>

import FormDate from './FormDate.vue'
import FormDropdown from './FormDropdown.vue'
import FormInput from './FormInput.vue'
import FormRepeatingField from './FormRepeatingField.vue'
import FormSelection from './FormSelection.vue'
import FormTextarea from './FormTextarea.vue'

export default {
  
  name: 'FieldGroup',
  components: {
    'FormDate': FormDate,
    'FormDropdown': FormDropdown,
    'FormInput': FormInput,
    'FormRepeatingField': FormRepeatingField,
    'FormSelection': FormSelection,
    'FormTextarea': FormTextarea
  },
  data() {
    return {
      inputFieldTypes: [
        'text',
        'decimal',
        'currency',
        'number',
        'phone',
      ],
      repeatingFieldTypes: [
        'rooms',
        'bathrooms',
        'openHouses'
      ],
      selectionFieldTypes: [
        'checkbox',
        'radio'
      ],
      userInputs: {}
    }
  },
  emits: ['change'],
  methods: {
    onChange(userInput) {

      this.userInputs = { ...this.userInputs, ...userInput };      
      this.$emit( 'change', this.userInputs );
    }
  },
  props: {
    'label': {
      type: String,
      required: true
    },
    'fields': {
      type: Array,
      required: true
    }
  }
}

</script>



<style scoped>

h2 {

  margin: 0;
  margin-top: 5px;
  margin-left: 3px;
  margin-bottom: 35px;
  font-size: 18px;
  color: #1FAD58;
}

.group {

  margin-bottom: 20px;
  padding: 20px 15px;
  padding-bottom: 15px;
}

.group:nth-child(odd) {

  background: #e7fff0;
}

.group:last-of-type {

    margin-bottom: 40px;
}

</style>

