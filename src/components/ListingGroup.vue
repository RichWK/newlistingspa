<template>
  
  <div class="grouping">

    <h2>{{ name }}</h2>

    <template v-for="field in fields" :key="field.name">

        <FormText v-if="field.type === 'text'" v-bind="field"/>
        <FormNumber v-if="field.type === 'number'" v-bind="field"/>
        <FormPhone v-if="field.type === 'phone'" v-bind="field"/>
        <FormCheckbox v-if="field.type === 'checkbox'" v-bind="field"/>
        <FormRadio v-if="field.type === 'radio'" v-bind="field"/>

    </template>

  </div>

</template>



<script>

import FormText from './FormText.vue'
import FormNumber from './FormNumber.vue'
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



</style>