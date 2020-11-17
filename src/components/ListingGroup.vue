<template>
  
<div class="group">

  <h2>{{ name }}</h2>

  <template v-for="field in fields" :key="field.name">

      <FormText v-if="field.fType === 'text'" v-bind="field"/>
      <FormDropdown v-if="field.fType === 'dropdown'" v-bind="field"/>
      <FormNumber v-if="field.fType === 'number'" v-bind="field"/>
      <FormDate v-if="field.fType === 'date'" v-bind="field"/>
      <FormPhone v-if="field.fType === 'phone'" v-bind="field"/>
      <FormCheckbox v-if="field.fType === 'checkbox'" v-bind="field"/>
      <FormRadio v-if="field.fType === 'radio'" v-bind="field"/>

  </template>

</div>

</template>



<script>

import FormText from './FormText.vue'
import FormDropdown from './FormDropdown.vue'
import FormNumber from './FormNumber.vue'
import FormDate from './FormDate.vue'
import FormPhone from './FormPhone.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRadio from './FormRadio.vue'

export default {
  
  name: 'Grouping',
  components: {
    'FormText': FormText,
    'FormDropdown': FormDropdown,
    'FormNumber': FormNumber,
    'FormDate': FormDate,
    'FormPhone': FormPhone,
    'FormCheckbox': FormCheckbox,
    'FormRadio': FormRadio
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
  margin-bottom: 30px;
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

</style>

