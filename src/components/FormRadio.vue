<template>

  <div class="container" v-for="option in options" :key="option.name">

    <PrimeRadio
      v-model="userInput"
      v-bind="$attrs"
      :id="option.name"
      :name="name"
      :value="option.name"
      @change="onChange"
    />
    <label :for="option.name">{{ option.friendlyName }}</label>

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
    'friendlyName': String,
    'fType': String,
    'name': String,
    'options': Array
  }
}

</script>



<style scoped>

.container {

  display: inline-block;
  margin-bottom: 20px;
}

.p-radiobutton {

  margin-right: 10px;
}

label {

  margin-right: 20px;
}

</style>

