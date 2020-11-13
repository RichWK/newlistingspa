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
            { name: "contractDate", fType: "date" }
          ]
        },
        {
          name: "Property address",
          fields: [
            { name: "addressUnitNumber", fType: "text", friendlyName: "Unit" },
            { name: "addressHouseNumber", fType: "text", friendlyName: "House number" },
            { name: "addressStreetName", fType: "text", friendlyName: "Street name" },
            { name: "addressStreetType", fType: "text", friendlyName: "Street fType" },
            { name: "addressStreetDirection", fType: "text", friendlyName: "Street direction" },
            { name: "addressCityOrTown", fType: "text", friendlyName: "City or town" }
          ]
        },
        {
          name: "Location",
          fields: [
            { name: "area", fType: "text" },
            { name: "subarea", fType: "text" }
          ]
        },
        {
          name: "Agent details",
          fields: [
            { name: "designatedAgent1", fType: "text" },
            { name: "designatedAgent2", fType: "text" },
            { name: "designatedAgent3", fType: "text" },
            { name: "userId1", fType: "text" },
            { name: "userId2", fType: "text" },
            { name: "userId3", fType: "text" }
          ]
        },
        {
          name: "Showing information",
          fields: [
            { name: "showingsNoRequirements", fType: "checkbox" },
            { name: "showingsPhoneListingRealtorFirst", fType: "checkbox" },
            { name: "showingsPhoneSellerFirst", fType: "checkbox" },
            { name: "showingsPhoneTenantFirst", fType: "checkbox" },
            { name: "showingsPhoneOther", fType: "checkbox" },
            { name: "showingsTouchbase", fType: "checkbox" },
            { name: "showingsShowingTime", fType: "checkbox" }
          ]
        },
        {
          name: "Appointment contact",
          fields: [
            { name: "appointmentPhoneNumber", fType: "phone", friendlyName: "Phone number" },
            { name: "forAppointmentCall", fType: "text", friendlyName: "For appointment call" }
          ]
        },
        {
          name: "Dwelling classification",
          fields: [
            { name: "dwellingClassificationDetached", fType: "radio" },
            { name: "dwellingClassificationAttached", fType: "radio" },
            { name: "dwellingClassificationMultifamily", fType: "radio" }
          ]
        },
        {
          name: "Type of dwelling",
          fields: [
            { name: "detachedHouseSingleFamily", fType: "radio" },
            { name: "detachedHouseWithAcreage", fType: "radio" },
            { name: "detachedTownhouse", fType: "radio" },
            { name: "detachedManufactured", fType: "radio" },
            { name: "detachedManufacturedWithLand", fType: "radio" },
            { name: "detachedRecreational", fType: "radio" },
            { name: "detachedOther", fType: "radio" },
            { name: "attachedApartmentCondo", fType: "radio" },
            { name: "attachedHalfDuplex", fType: "radio" },
            { name: "attachedRecreational", fType: "radio" },
            { name: "attachedTownhouse", fType: "radio" },
            { name: "attachedRowHouseNonStrata", fType: "radio" },
            { name: "attachedOther", fType: "radio" },
            { name: "multifamilyDuplex", fType: "radio" },
            { name: "multifamilyTriplex", fType: "radio" },
            { name: "multifamilyFourplex", fType: "radio" },
            { name: "multifamilyRecreational", fType: "radio" },
            { name: "multifamilyOther", fType: "radio" }
          ]
        }
      ]
    }
  }
}

</script>

