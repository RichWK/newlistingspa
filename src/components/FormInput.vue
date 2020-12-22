<template>

  <div
    class="container p-float-label"
  >
    
    <PrimeText
      v-if="textFieldTypes.includes( fType )"
      v-model="userInput"
      :id="name"
      :type="type"
      :inputmode="inputMode"
      :pattern="pattern"
      @change="onChange"
    />
    <PrimeNumber
      v-if="numberFieldTypes.includes( fType )"
      v-model="userInput"
      :currency="currency"
      :id="name"
      :minFractionDigits="minFractionDigits"
      :mode="mode"
      :suffix="suffix"
      :useGrouping="useGrouping"
      @blur="onBlur"
    />
    <label :for="name">{{ label }}</label>
    
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
    suffix() {
      return this.fType === 'percentage' ? '%' : undefined
    },
    type() {
      return this.fType === 'phone' ? 'tel' : 'text'
    },
    useGrouping() {
      return this.fType === 'year' ? false : true
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
        'currency',
        'decimal',
        'number',
        'percentage',
        'year'
      ],
      userInput: null
    }
  },
  emits: ['change'],
  methods: {
    onBlur() {
      // setTimeout( () => { console.log( this.userInput ) }, 1000 );
      setTimeout( () => { this.$emit( 'change', this.userInputAsObject); }, 1000 );
    },
    onChange() {
      this.$emit( 'change', this.userInputAsObject);
    }
  },
  props: {
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
  margin-bottom: 20px;
}

.p-inputtext, .p-inputnumber {

  width: 250px;
}

</style>

