<template>
  
  <div class="group">

    <h2>{{ name }}</h2>

    <template v-for="field in fields" :key="field.name">

      <FormText
        v-if="this.textFieldTypes.includes( field.fType )"
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
      <FormCheckbox
        v-if="field.fType === 'checkbox'"
        v-bind="field"
        @new-user-input="newUserInput"
      />
      <FormRadio
        v-if="field.fType === 'radio'"
        v-bind="field"
        @new-user-input="newUserInput"
      />

    </template>

  </div>

</template>



<script>

import FormText from './FormText.vue'
import FormDate from './FormDate.vue'
import FormDropdown from './FormDropdown.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRadio from './FormRadio.vue'

export default {
  
  name: 'FieldGroup',
  components: {
    'FormText': FormText,
    'FormDate': FormDate,
    'FormDropdown': FormDropdown,
    'FormCheckbox': FormCheckbox,
    'FormRadio': FormRadio
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
  emits: ['new-user-input'],
  methods: {
    newUserInput(userInput) {
      let { name, value } = userInput;
      this.userInputs[name] = value;
      this.$emit( 'new-user-input', this.userInputs );
    }
  },
  props: {
    'name': String,
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

