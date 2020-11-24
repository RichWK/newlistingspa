<template>

  <div class="radioFields">

    <div class="container" v-for="option in options" :key="option.name">

      <PrimeRadio
        v-model="userInput"
        v-bind="$attrs"
        :id="option.name"
        :name="name"
        :value="option.name"
        @change="onChange"
      />
      <label :for="option.name">{{ option.label }}</label>

    </div>

  </div>

</template>



<script>

import RadioButton from 'primevue/radiobutton';

export default {
  
  name: 'FormRadio',
  components: {
    'PrimeRadio': RadioButton
  },
  data () {
    return {
      'userInput': null 
    }
  },
  emits: ['new-user-input'],
  methods: {
    onChange() {
      this.$emit( 'new-user-input',
        {
          name: this.name,
          value: this.userInput
        }
      );
    }
  },
  props: {
    'label': String,
    'fType': String,
    'name': String,
    'options': Array
  }
}

</script>



<style scoped>

.radioFields {

  margin-bottom: 15px;
}

.container {

  display: inline-block;
  margin-bottom: 20px;
}

label {

  padding: 5px;
  padding-left: 10px;
  padding-right: 5px;
  margin-right: 20px;
}

</style>

