<template>
  
  <PrimeTextarea
    v-model="userInput"
    :id="name"
    :autoResize="true"
    @change="onChange"
  />

</template>



<script>

import Textarea from 'primevue/textarea';

export default {
  
  name: 'FormTextarea',
  components: {
    'PrimeTextarea': Textarea
  },
  data () {
    return {
      userInput: null
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
    'name': String
  }
}

</script>



<style scoped>

.p-inputtextarea {

  margin-bottom: 30px;
  max-width: 100%;
  width: 600px;
  height: 150px;
  border-radius: 4px;
}

</style>