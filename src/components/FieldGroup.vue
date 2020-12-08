<template>
  
  <div class="group">

    <div class="header-container">

      <h2>{{ label }}</h2>
      <span
        v-if="note"
        class="note"
        @click="toggleNote"
      >?</span>
      <span
        v-if="maximum"
        class="maximum"
      >max {{ maximum }}</span>

      <p
        v-if="note"
        :class="{ show: showNote }"
      >{{ note }}</p>

    </div>

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
  computed: {
    maximum() {
      let i, max = 0;
      for ( i = 0; i < this.fields.length; i++ ) {
        if ( this.fields[i]['maximum'] ) {
          max = this.fields[i]['maximum'];
          break;
        }
      }
      return max;
    }
  },
  data() {
    return {
      inputFieldTypes: [
        'currency',
        'decimal',
        'number',
        'percentage',
        'phone',
        'text',
        'year'
      ],
      repeatingFieldTypes: [
        'bathrooms',
        'openHouses',
        'rooms'
      ],
      selectionFieldTypes: [
        'checkbox',
        'radio'
      ],
      showNote: false,
      userInputs: {}
    }
  },
  emits: ['change'],
  methods: {
    onChange(userInput) {

      this.userInputs = { ...this.userInputs, ...userInput };      
      this.$emit( 'change', this.userInputs );
    },
    toggleNote() {
      this.showNote = !this.showNote;
    }
  },
  props: {
    'fields': {
      type: Array,
      required: true
    },
    'label': {
      type: String,
      required: true
    },
    'note': String
  }
}

</script>



<style scoped>

.header-container h2 {

  display: inline-block;
  margin: 0;
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 10px;
  margin-bottom: 35px;
  font-size: 18px;
  color: #1fad58;
}

.header-container span {

  display: inline-block;
  position: relative;
  top: -2px;
  padding: 4px 8px 5px;
  line-height: 1;
}

.header-container span.note {

  color: #1fad58;
  cursor: pointer;
  border: 2px solid #1fad58;
  font-weight: bold;
  border-radius: 25px;
  padding: 5px 10px;
  margin-right: 10px;
}

.header-container span.maximum {

  background: #1fad58;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  user-select: none;
}

.header-container p {

  margin: 0;
  font-style: italic;
  font-size: 15px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
}

.header-container p.show {

  max-height: 200px;
  margin-bottom: 35px;
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

