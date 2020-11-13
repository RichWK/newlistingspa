<template>

  <h1>Create a new listing</h1>

  <Grouping/>
  <HelloWorld/>

</template>



<script>

import HelloWorld from './components/HelloWorld.vue'
import Grouping from './components/Grouping.vue'

export default {

  name: 'App',
  components: {
    HelloWorld,
    Grouping
  },
  data() {
    return {
      groupings: [
        {
          name: "Multiple Listing Contract date",
          fields: [
            { name: "contractDateDay", type: "days" },
            { name: "contractDateMonth", type: "months" },
            { name: "contractDateYear", type: "number" }
          ]
        },
        {
          name: "Property address",
          fields: [
            { name: "addressUnitNumber", type: "string", friendlyName: "Unit" },
            { name: "addressHouseNumber", type: "string", friendlyName: "House number" },
            { name: "addressStreetName", type: "string", friendlyName: "Street name" },
            { name: "addressStreetType", type: "string", friendlyName: "Street type" },
            { name: "addressStreetDirection", type: "string", friendlyName: "Street direction" },
            { name: "addressCityOrTown", type: "string", friendlyName: "City or town" }
          ]
        },
        {
          name: "Location",
          fields: [
            { name: "area", type: "string" },
            { name: "subarea", type: "string" }
          ]
        },
        {
          name: "Agent details",
          fields: [
            { name: "designatedAgent1", type: "string" },
            { name: "designatedAgent2", type: "string" },
            { name: "designatedAgent3", type: "string" },
            { name: "userId1", type: "string" },
            { name: "userId2", type: "string" },
            { name: "userId3", type: "string" }
          ]
        },
        {
          name: "Showing information",
          fields: [
            { name: "showingsNoRequirements", type: "checkbox" },
            { name: "showingsPhoneListingRealtorFirst", type: "checkbox" },
            { name: "showingsPhoneSellerFirst", type: "checkbox" },
            { name: "showingsPhoneTenantFirst", type: "checkbox" },
            { name: "showingsPhoneOther", type: "checkbox" },
            { name: "showingsTouchbase", type: "checkbox" },
            { name: "showingsShowingTime", type: "checkbox" }
          ]
        },
        {
          name: "Appointment contact",
          fields: [
            { name: "appointmentPhoneNumber", type: "phone", friendlyName: "Phone number" },
            { name: "forAppointmentCall", type: "string", friendlyName: "For appointment call" }
          ]
        },
        {
          name: "Dwelling classification",
          fields: [
            { name: "dwellingClassificationDetached", type: "radio" },
            { name: "dwellingClassificationAttached", type: "radio" },
            { name: "dwellingClassificationMultifamily", type: "radio" }
          ]
        },
        {
          name: "Type of dwelling",
          fields: [
            { name: "detachedHouseSingleFamily", type: "radio" },
            { name: "detachedHouseWithAcreage", type: "radio" },
            { name: "detachedTownhouse", type: "radio" },
            { name: "detachedManufactured", type: "radio" },
            { name: "detachedManufacturedWithLand", type: "radio" },
            { name: "detachedRecreational", type: "radio" },
            { name: "detachedOther", type: "radio" },
            { name: "attachedApartmentCondo", type: "radio" },
            { name: "attachedHalfDuplex", type: "radio" },
            { name: "attachedRecreational", type: "radio" },
            { name: "attachedTownhouse", type: "radio" },
            { name: "attachedRowHouseNonStrata", type: "radio" },
            { name: "attachedOther", type: "radio" },
            { name: "multifamilyDuplex", type: "radio" },
            { name: "multifamilyTriplex", type: "radio" },
            { name: "multifamilyFourplex", type: "radio" },
            { name: "multifamilyRecreational", type: "radio" },
            { name: "multifamilyOther", type: "radio" }
          ]
        }
      ]
    }
  }
}

</script>



<style>

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}

</style>

