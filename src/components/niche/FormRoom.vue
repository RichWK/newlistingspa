<template>

  <FormDropdown
    :options="rooms"
  />
  <FormDropdown
    :options="floors"
  />
  <FormText
    label="Dimensions"
  />
  
  <!-- <PrimeDropdown
    v-model="userInput"
    :placeholder="label"
    :options="options"
    optionLabel="name"
    filter
    @change="onChange"
  /> -->

</template>



<script>

import FormDropdown from './FormDropdown.vue'
import FormText from './FormText.vue'

export default {
  
  name: 'FormRoom',
  components: {
    'FormDropdown': FormDropdown,
    'FormText': FormText
  },
  data () {
    return {
      'floors': [
        'Main',
        'Above',
        'Below',
        'Basement'
      ],
      'rooms': [
        'Attic',
        'Bar Room',
        'Bedroom',
        'Butler\'s Pantry',
        'Cold Room',
        'Conservatory',
        'Den',
        'Dining Room',
        'Dressing Room',
        'Eating Area',
        'Family Room',
        'Flex Room',
        'Foyer',
        'Games Room',
        'Great Room',
        'Gym',
        'Hobby Room',
        'Kitchen',
        'Laundry',
        'Library',
        'Living Room',
        'Loft',
        'Master Bedroom',
        'Media Room',
        'Mud Room',
        'Nook',
        'Office',
        'Other',
        'Pantry',
        'Patio',
        'Playroom',
        'Porch, enclosed',
        'Recreation Room',
        'Sauna',
        'Solarium',
        'Steam Room',
        'Storage',
        'Study',
        'Utility',
        'Walk-in Closet',
        'Wine Room',
        'Wok Kitchen',
        'Workshop'
      ],
      'userInput': null
    }
  },
  // emits: ['new-user-input'],
  // methods: {
  //   onChange() {
  //     this.$emit( 'new-user-input',
  //       {
  //         name: this.name,
  //         value: this.userInput.name
  //       }
  //     );
  //   }
  // },
  props: {

  }
}

</script>



<style scoped>



</style>

