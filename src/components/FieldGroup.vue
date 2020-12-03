<template>
  
  <div class="group">

    <h2>{{ label }}</h2>

    <template v-for="field in fields" :key="field.name">

      <FormText
        v-if="this.textFieldTypes.includes( field.fType )"
        v-bind="field"
        @new-user-input="newUserInput"
      />
      <FormSelection
        v-if="this.selectionFieldTypes.includes( field.fType )"
        v-bind="field"
        @new-user-input="newUserInput"
      />
      <FormDate
        v-if="field.fType === 'date'"
        v-bind="field"
        @new-user-input="newUserInput"
      />
      <FormDropdown
        v-if="field.fType === 'dropdown'"
        v-bind="field"
        @new-user-input="newUserInput"
      />
      <FormTextarea
        v-if="field.fType === 'textarea'"
        v-bind="field"
        @new-user-input="newUserInput"
      />
      <FormRoom
        v-if="field.fType === 'rooms'"
        @change="onChange"
      />

    </template>

  </div>

</template>



<script>

import FormText from './FormText.vue'
import FormSelection from './FormSelection.vue'
import FormDate from './FormDate.vue'
import FormDropdown from './FormDropdown.vue'
import FormTextarea from './FormTextarea.vue'
import FormRoom from './FormRoom.vue'

export default {
  
  name: 'FieldGroup',
  components: {
    'FormText': FormText,
    'FormSelection': FormSelection,
    'FormDate': FormDate,
    'FormDropdown': FormDropdown,
    'FormTextarea': FormTextarea,
    'FormRoom': FormRoom
  },
  data() {
    return {
      textFieldTypes: [
        'text',
        'number',
        'decimal',
        'currency',
        'phone',
      ],
      selectionFieldTypes: [
        'checkbox',
        'radio'
      ],
      userInputs: {}
    }
  },
  emits: ['change','new-user-input'],
  methods: {
    newUserInput(userInput) {
      let { name, value } = userInput;
      this.userInputs[name] = value;
      this.$emit( 'new-user-input', this.userInputs );
    },
    onChange(userInput) {

      this.userInputs = { ...this.userInputs, ...userInput };      
      this.$emit( 'change', this.userInputs );
    }
  },
  props: {
    'label': String,
    'fields': Array
  }
}

</script>



<style scoped>

h2 {

  margin: 0;
  margin-top: 5px;
  margin-left: 3px;
  margin-bottom: 35px;
  font-size: 14px;
}

.group {

  margin-bottom: 20px;
  padding: 20px 15px;
  padding-bottom: 15px;
  border-radius: 5px;
}

.group:nth-child(odd) {

  background: #d5d5d5;
}

.group:last-of-type {

    margin-bottom: 40px;
}

</style>

