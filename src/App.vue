<template>

  <h1>Create a new listing</h1>

  <FieldGroup
    v-for="group in groups"
    :key="group.name"
    :name="group.name"
    :fields="group.fields"
  />

</template>



<script>

import FieldGroup from './components/FieldGroup.vue'

export default {

  name: 'App',
  components: {
    FieldGroup
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
            { 
              name: "showingInformation",
              fType: "checkbox",
              friendlyName: "Keybox or appointment not required",
              options: [
                { name: "showingsNoRequirements", friendlyName: "Keybox or appointment not required" },
                { name: "showingsPhoneListingRealtorFirst", friendlyName: "Phone listing agent first" },
                { name: "showingsPhoneSellerFirst", friendlyName: "Phone seller first" },
                { name: "showingsPhoneTenantFirst", friendlyName: "Phone tenant first" },
                { name: "showingsPhoneOther", friendlyName: "Phone other" },
                { name: "showingsTouchbase", friendlyName: "Touchbase" },
                { name: "showingsShowingTime", friendlyName: "Showing Time (BC Northern only)" }
              ]
            }
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
            { 
              name: "dwellingClassification",
              fType: "radio",
              friendlyName: "Detached",
              options: [
                { name: "dwellingClassificationDetached", friendlyName: "Detached" },
                { name: "dwellingClassificationAttached", friendlyName: "Attached" },
                { name: "dwellingClassificationMultifamily", friendlyName: "Multifamily" }
              ]
            }
          ]
        },
        {
          name: "Type of dwelling",
          fields: [
            { 
              name: "typeOfDwelling",
              fType: "radio",
              friendlyName: "Type of dwelling",
              options: [
                { name: "detachedHouseSingleFamily", friendlyName: "House / single family" },
                { name: "detachedHouseWithAcreage", friendlyName: "House with acreage" },
                { name: "detachedTownhouse", friendlyName: "Detached townhouse" },
                { name: "detachedManufactured", friendlyName: "Manufactured" },
                { name: "detachedManufacturedWithLand", friendlyName: "Manufactured with land" },
                { name: "detachedRecreational", friendlyName: "Recreational detached" },
                { name: "detachedOther", friendlyName: "Other detached" },
                { name: "attachedApartmentCondo", friendlyName: "Apartment / condo" },
                { name: "attachedHalfDuplex", friendlyName: "1/2 duplex" },
                { name: "attachedRecreational", friendlyName: "Recreational attached" },
                { name: "attachedTownhouse", friendlyName: "Attached townhouse" },
                { name: "attachedRowHouseNonStrata", friendlyName: "Row house (non-strata)" },
                { name: "attachedOther", friendlyName: "Other attached" },
                { name: "multifamilyDuplex", friendlyName: "Duplex" },
                { name: "multifamilyTriplex", friendlyName: "Triplex" },
                { name: "multifamilyFourplex", friendlyName: "Fourplex" },
                { name: "multifamilyRecreational", friendlyName: "Recreational multifamily" },
                { name: "multifamilyOther", friendlyName: "Other multifamily" }
              ]
            }
          ]
        }
      ]
    }
  }
}

</script>

