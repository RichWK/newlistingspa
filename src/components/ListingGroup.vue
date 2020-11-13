<template>
  
  <div class="grouping">

    <h2>{{ name }}</h2>

    <template v-for="field in fields" :key="field.name">

        <FormText v-if="field.fType === 'text'" v-bind="field"/>
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
import FormNumber from './FormNumber.vue'
import FormDate from './FormDate.vue'
import FormPhone from './FormPhone.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormRadio from './FormRadio.vue'
// import Days from './components/Days.vue'
// import Months from './components/Months.vue'

export default {
  
  name: 'Grouping',
  components: {
    'FormText': FormText,
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

  font-weight: normal;
  font-size: 14px;
}

</style>