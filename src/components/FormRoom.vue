<template>

  <FormDropdown
    v-model="room"
    placeholder="Room"
    optionLabel="room"
    :options="rooms"
    @change="onChange"
  />
  <FormDropdown
    v-model="floor"
    placeholder="Floor"
    optionLabel="floor"
    :filter="false"
    :options="floors"
    @change="onChange"
  />
  <FormText
    v-model="dimensions"
    label="Dimensions"
    @change="onChange"
  />

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
  computed: {
    userInputs() {
      let obj = {};
      obj.dimensions = this.dimensions;
      obj.floor = this.floor?.floor;
      obj.room = this.room?.room;
      return obj;
    }
  },
  data () {
    return {
      'dimensions': null,
      'floor': null,
      'floors': [
         { "floor": 'Main' },
         { "floor": 'Above' },
         { "floor": 'Below' },
         { "floor": 'Basement' }
      ],
      'room': null,
      'rooms': [
        { "room": 'Master Bedroom' },
        { "room": 'Attic' },
        { "room": 'Bar Room' },
        { "room": 'Bedroom' },
        { "room": 'Butler\'s Pantry' },
        { "room": 'Cold Room' },
        { "room": 'Conservatory' },
        { "room": 'Den' },
        { "room": 'Dining Room' },
        { "room": 'Dressing Room' },
        { "room": 'Eating Area' },
        { "room": 'Family Room' },
        { "room": 'Flex Room' },
        { "room": 'Foyer' },
        { "room": 'Games Room' },
        { "room": 'Great Room' },
        { "room": 'Gym' },
        { "room": 'Hobby Room' },
        { "room": 'Kitchen' },
        { "room": 'Laundry' },
        { "room": 'Library' },
        { "room": 'Living Room' },
        { "room": 'Loft' },
        { "room": 'Media Room' },
        { "room": 'Mud Room' },
        { "room": 'Nook' },
        { "room": 'Office' },
        { "room": 'Other' },
        { "room": 'Pantry' },
        { "room": 'Patio' },
        { "room": 'Playroom' },
        { "room": 'Porch, enclosed' },
        { "room": 'Recreation Room' },
        { "room": 'Sauna' },
        { "room": 'Solarium' },
        { "room": 'Steam Room' },
        { "room": 'Storage' },
        { "room": 'Study' },
        { "room": 'Utility' },
        { "room": 'Walk-in Closet' },
        { "room": 'Wine Room' },
        { "room": 'Wok Kitchen' },
        { "room": 'Workshop' }
      ]
    }
  },
  emits: ['change'],
  methods: {
    onChange() {
      this.$emit( 'change', this.userInputs );
    }
  }
}

</script>



<style scoped>



</style>

