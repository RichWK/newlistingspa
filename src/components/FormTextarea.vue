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
  computed: {
    userInputAsObject() {
      return { [this.name]: this.userInput }
    }
  },
  data () {
    return {
      userInput: null
    }
  },
  emits: ['change'],
  methods: {
    onChange() {
      this.$emit( 'change', this.userInputAsObject );
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