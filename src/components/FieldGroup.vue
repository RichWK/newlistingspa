<template>
  
<div class="group">

  <h2>{{ name }}</h2>

  <FormText v-for="field in textFields" :key="field.name" v-bind="field" />
  <FormDate v-for="field in dateFields" :key="field.name" v-bind="field"/>
  <FormDropdown v-for="field in dropdownFields" :key="field.name" v-bind="field"/>
  <FormCheckbox v-for="field in checkboxFields" :key="field.name" v-bind="field"/>
  <FormRadio v-for="field in radioFields" :key="field.name" v-bind="field"/>
  <!-- <FormNumber v-for="field in numberFields" :key="field.name" v-bind="field"/> -->

</div>

</template>



<script>

import FormText from './FormText.vue'
import FormDate from './FormDate.vue'
import FormDropdown from './FormDropdown.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRadio from './FormRadio.vue'
// import FormNumber from './FormNumber.vue'

export default {
  
  name: 'FieldGroup',
  computed: {
    textFields() {
      return this.fields.filter( f => this.textFieldTypes.includes( f.fType ) );
    },
    dateFields() {
      return this.fields.filter( f => f.fType === 'date' );
    },
    dropdownFields() {
      return this.fields.filter( f => f.fType === 'dropdown' );
    },
    checkboxFields() {
      return this.fields.filter( f => f.fType === 'checkbox' );
    },
    radioFields() {
      return this.fields.filter( f => f.fType === 'radio' );
    }
  },
  components: {
    'FormText': FormText,
    'FormDate': FormDate,
    'FormDropdown': FormDropdown,
    'FormCheckbox': FormCheckbox,
    'FormRadio': FormRadio
    // 'FormNumber': FormNumber
  },
  data() {
    return {
      textFieldTypes: ['text', 'phone']
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

