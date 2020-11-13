<template>

  <h1>Create a new listing</h1>

  <ListingGroup
    v-for="group in groups"
    :key="group.name"
    :name="group.name"
    :fields="group.fields"
  />

</template>



<script>

import ListingGroup from './components/ListingGroup.vue'

export default {

  name: 'App',
  components: {
    ListingGroup
  },
  data() {
    return {
      groups: [
        {
          name: "Date on Multiple Listing Contract",
          fields: [
            { name: "contractDate", type: "date" }
          ]
        },
        {
          name: "Property address",
          fields: [
            { name: "addressUnitNumber", type: "text", friendlyName: "Unit" },
            { name: "addressHouseNumber", type: "text", friendlyName: "House number" },
            { name: "addressStreetName", type: "text", friendlyName: "Street name" },
            { name: "addressStreetType", type: "text", friendlyName: "Street type" },
            { name: "addressStreetDirection", type: "text", friendlyName: "Street direction" },
            { name: "addressCityOrTown", type: "text", friendlyName: "City or town" }
          ]
        },
        {
          name: "Location",
          fields: [
            { name: "area", type: "text" },
            { name: "subarea", type: "text" }
          ]
        },
        {
          name: "Agent details",
          fields: [
            { name: "designatedAgent1", type: "text" },
            { name: "designatedAgent2", type: "text" },
            { name: "designatedAgent3", type: "text" },
            { name: "userId1", type: "text" },
            { name: "userId2", type: "text" },
            { name: "userId3", type: "text" }
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
            { name: "forAppointmentCall", type: "text", friendlyName: "For appointment call" }
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

