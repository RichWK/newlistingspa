<template>

  <div
    class="container"
    :class="{ 'p-float-label' : floatingLabel }"
  >
    
    <PrimeText
      v-if="textFieldTypes.includes( fType )"
      v-model="userInput"
      :id="name"
      :type="type"
      :inputmode="inputMode"
      :pattern="pattern"
      :placeholder="placeholderText"
      @change="onChange"
    />
    <PrimeNumber
      v-if="numberFieldTypes.includes( fType )"
      v-model="userInput"
      :currency="currency"
      :id="name"
      :minFractionDigits="minFractionDigits"
      :mode="mode"
      :useGrouping="useGrouping"
      @change="onChange"
    />
    <label v-if="floatingLabel" :for="name">{{ label }}</label>
    
  </div>

</template>



<script>

import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';

export default {
  
  name: 'FormInput',
  components: {
    'PrimeNumber': InputNumber,
    'PrimeText': InputText
  },
  computed: {
    currency() {
      return this.fType === 'currency' ? 'CAD' : undefined
    },
    inputMode() {
      return this.fType === 'number' ? 'numeric' : undefined
    },
    minFractionDigits() {
      return this.fType === 'decimal' ? 2 : undefined
    },
    mode() {
      switch( this.fType ) {
        case 'currency':
          return 'currency'
        default:
          return 'decimal'
      }
    },
    pattern() {
      return this.fType === 'number' ? '[0-9]*' : undefined
    },
    placeholderText() {
      return this.floatingLabel === false ? this.label : ''
    },
    type() {
      return this.fType === 'phone' ? 'tel' : 'text'
    },
    useGrouping() {
      return this.fType === 'number' ? false : true
    },
    userInputAsObject() {
      return { [this.name]: this.userInput }
    }
  },
  data () {
    return {
      'textFieldTypes': [
        'text',
        'phone'
      ],
      'numberFieldTypes': [
        'number',
        'decimal',
        'currency'
      ],
      userInput: null
    }
  },
  emits: ['change'],
  methods: {
    onChange() {
      this.$emit( 'change', this.userInputAsObject);
    }
  },
  props: {
    'floatingLabel': {
      type: Boolean,
      default: true
    },
    'fType': {
      type: String,
      default: 'text'
    },
    'label': String,
    'name': String
  }
}

</script>



<style scoped>

.container {

  display: inline-block;
  margin-right: 12px;
  margin-bottom: 30px;
}

/* Adjusting PrimeVue floating label defaults. */

.p-float-label input:focus ~ label, .p-float-label input.p-filled ~ label, .p-float-label textarea:focus ~ label, .p-float-label textarea.p-filled ~ label, .p-float-label .p-inputwrapper-focus ~ label, .p-float-label .p-inputwrapper-filled ~ label {
  
    top: -.65rem;
    font-size: 11px;
    left: 0.2rem;
}

input {

  display: block;
  border-radius: 4px;
}

.p-inputtext, .p-inputnumber {

  width: 250px;
}

</style>

