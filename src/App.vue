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
            { name: "addressStreetType", fType: "text", friendlyName: "Street type" },
            { name: "addressStreetDirection", fType: "text", friendlyName: "Street direction" },
            { name: "addressCityOrTown", fType: "text", friendlyName: "City or town" }
          ]
        },
        {
          name: "General location",
          fields: [
            { 
              name: "area",
              fType: "dropdown",
              friendlyName: "Area",
              options: [
                { name: "Burnaby East" },
                { name: "Burnaby North" },
                { name: "Burnaby South" },
                { name: "Coquitlam" },
                { name: "Islands Van and Gulf" },
                { name: "Ladner" },
                { name: "Maple Ridge" },
                { name: "New Westminster" },
                { name: "North Vancouver" },
                { name: "Pemberton" },
                { name: "Pitt Meadows" },
                { name: "Port Coquitlam" },
                { name: "Port Moody" },
                { name: "Richmond" },
                { name: "Squamish" },
                { name: "Sunshine Coast" },
                { name: "Tsawwassen" },
                { name: "Vancouver East" },
                { name: "Vancouver West" },
                { name: "West Vancouver" },
                { name: "Whistler" }
              ]
            },
            { 
              name: "subarea",
              fType: "dropdown",
              friendlyName: "Subarea",
              options: [
                { name: "Subareas" }
            ] }
          ]
        },
        {
          name: "Agent details",
          fields: [
            { name: "designatedAgent1", fType: "text", friendlyName: "Primary agent's full name" },
            { name: "userId1", fType: "text", friendlyName: "Primary agent's ID number" },
            { name: "designatedAgent2", fType: "text", friendlyName: "Secondary agent's full name" },
            { name: "userId2", fType: "text", friendlyName: "Secondary agent's ID number" },
            { name: "designatedAgent3", fType: "text", friendlyName: "Tertiary agent's full name" },
            { name: "userId3", fType: "text", friendlyName: "Tertiary agent's ID number" }
          ]
        },
        {
          name: "Showing information",
          fields: [
            { name: "showingsNoRequirements", fType: "checkbox", friendlyName: "Keybox or appointment not required" },
            { name: "showingsPhoneListingRealtorFirst", fType: "checkbox", friendlyName: "Phone listing agent first" },
            { name: "showingsPhoneSellerFirst", fType: "checkbox", friendlyName: "Phone seller first" },
            { name: "showingsPhoneTenantFirst", fType: "checkbox", friendlyName: "Phone tenant first" },
            { name: "showingsPhoneOther", fType: "checkbox", friendlyName: "Phone other" },
            { name: "showingsTouchbase", fType: "checkbox", friendlyName: "Touchbase" },
            { name: "showingsShowingTime", fType: "checkbox", friendlyName: "Showing Time (BC Northern only)" }
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
            { name: "dwellingClassificationDetached", fType: "radio", friendlyName: "Detached" },
            { name: "dwellingClassificationAttached", fType: "radio", friendlyName: "Attached" },
            { name: "dwellingClassificationMultifamily", fType: "radio", friendlyName: "Multifamily" }
          ]
        },
        {
          name: "Type of dwelling",
          fields: [
            { name: "detachedHouseSingleFamily", fType: "radio", friendlyName: "House / single family" },
            { name: "detachedHouseWithAcreage", fType: "radio", friendlyName: "House with acreage" },
            { name: "detachedTownhouse", fType: "radio", friendlyName: "Detached townhouse" },
            { name: "detachedManufactured", fType: "radio", friendlyName: "Manufactured" },
            { name: "detachedManufacturedWithLand", fType: "radio", friendlyName: "Manufactured with land" },
            { name: "detachedRecreational", fType: "radio", friendlyName: "Recreational detached" },
            { name: "detachedOther", fType: "radio", friendlyName: "Other detached" },
            { name: "attachedApartmentCondo", fType: "radio", friendlyName: "Apartment / condo" },
            { name: "attachedHalfDuplex", fType: "radio", friendlyName: "1/2 duplex" },
            { name: "attachedRecreational", fType: "radio", friendlyName: "Recreational attached" },
            { name: "attachedTownhouse", fType: "radio", friendlyName: "Attached townhouse" },
            { name: "attachedRowHouseNonStrata", fType: "radio", friendlyName: "Row house (non-strata)" },
            { name: "attachedOther", fType: "radio", friendlyName: "Other attached" },
            { name: "multifamilyDuplex", fType: "radio", friendlyName: "Duplex" },
            { name: "multifamilyTriplex", fType: "radio", friendlyName: "Triplex" },
            { name: "multifamilyFourplex", fType: "radio", friendlyName: "Fourplex" },
            { name: "multifamilyRecreational", fType: "radio", friendlyName: "Recreational multifamily" },
            { name: "multifamilyOther", fType: "radio", friendlyName: "Other multifamily" }
          ]
        }
      ]
    }
  }
}

</script>

