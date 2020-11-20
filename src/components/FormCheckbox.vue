<template>
  
  <div class="container" v-for="option in options" :key="option.name">
  
    <PrimeCheckbox
      v-model="userInput"
      :id="option.name"
      :name="name"
      :value="option.name"
      @change="onChange"
    />
    <label :for="option.name">{{ option.friendlyName }}</label>

  </div>

</template>



<script>

import Checkbox from 'primevue/checkbox';

export default {
  
  name: 'FormCheckbox',
  components: {
    'PrimeCheckbox': Checkbox
  },
  data () {
    return {
      'userInput': [] 
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

.p-checkbox {

  margin-right: 10px;
}

label {

  margin-right: 20px;
}

</style>

