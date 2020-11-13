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
            { name: "contractDate", fieldType: "date" }
          ]
        },
        {
          name: "Property address",
          fields: [
            { name: "addressUnitNumber", fieldType: "text", friendlyName: "Unit" },
            { name: "addressHouseNumber", fieldType: "text", friendlyName: "House number" },
            { name: "addressStreetName", fieldType: "text", friendlyName: "Street name" },
            { name: "addressStreetType", fieldType: "text", friendlyName: "Street fieldType" },
            { name: "addressStreetDirection", fieldType: "text", friendlyName: "Street direction" },
            { name: "addressCityOrTown", fieldType: "text", friendlyName: "City or town" }
          ]
        },
        {
          name: "Location",
          fields: [
            { name: "area", fieldType: "text" },
            { name: "subarea", fieldType: "text" }
          ]
        },
        {
          name: "Agent details",
          fields: [
            { name: "designatedAgent1", fieldType: "text" },
            { name: "designatedAgent2", fieldType: "text" },
            { name: "designatedAgent3", fieldType: "text" },
            { name: "userId1", fieldType: "text" },
            { name: "userId2", fieldType: "text" },
            { name: "userId3", fieldType: "text" }
          ]
        },
        {
          name: "Showing information",
          fields: [
            { name: "showingsNoRequirements", fieldType: "checkbox" },
            { name: "showingsPhoneListingRealtorFirst", fieldType: "checkbox" },
            { name: "showingsPhoneSellerFirst", fieldType: "checkbox" },
            { name: "showingsPhoneTenantFirst", fieldType: "checkbox" },
            { name: "showingsPhoneOther", fieldType: "checkbox" },
            { name: "showingsTouchbase", fieldType: "checkbox" },
            { name: "showingsShowingTime", fieldType: "checkbox" }
          ]
        },
        {
          name: "Appointment contact",
          fields: [
            { name: "appointmentPhoneNumber", fieldType: "phone", friendlyName: "Phone number" },
            { name: "forAppointmentCall", fieldType: "text", friendlyName: "For appointment call" }
          ]
        },
        {
          name: "Dwelling classification",
          fields: [
            { name: "dwellingClassificationDetached", fieldType: "radio" },
            { name: "dwellingClassificationAttached", fieldType: "radio" },
            { name: "dwellingClassificationMultifamily", fieldType: "radio" }
          ]
        },
        {
          name: "Type of dwelling",
          fields: [
            { name: "detachedHouseSingleFamily", fieldType: "radio" },
            { name: "detachedHouseWithAcreage", fieldType: "radio" },
            { name: "detachedTownhouse", fieldType: "radio" },
            { name: "detachedManufactured", fieldType: "radio" },
            { name: "detachedManufacturedWithLand", fieldType: "radio" },
            { name: "detachedRecreational", fieldType: "radio" },
            { name: "detachedOther", fieldType: "radio" },
            { name: "attachedApartmentCondo", fieldType: "radio" },
            { name: "attachedHalfDuplex", fieldType: "radio" },
            { name: "attachedRecreational", fieldType: "radio" },
            { name: "attachedTownhouse", fieldType: "radio" },
            { name: "attachedRowHouseNonStrata", fieldType: "radio" },
            { name: "attachedOther", fieldType: "radio" },
            { name: "multifamilyDuplex", fieldType: "radio" },
            { name: "multifamilyTriplex", fieldType: "radio" },
            { name: "multifamilyFourplex", fieldType: "radio" },
            { name: "multifamilyRecreational", fieldType: "radio" },
            { name: "multifamilyOther", fieldType: "radio" }
          ]
        }
      ]
    }
  }
}

</script>

