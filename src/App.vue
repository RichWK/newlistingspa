<template>

  <!-- Future to-do for the data: 
  
  - Add a 'rules' attribute, e.g. "max 2 selected", etc.
  - Check order of fields in the 'Title to Land' section.
  - Fields need to be able to define a pattern, especially for number fields.
  
  -->

  <h1>Create a new listing</h1>

  <form>

    <FieldGroup
      v-for="group in groups"
      :key="group.name"
      :name="group.name"
      :fields="group.fields"
      @new-user-input="storeUserInputs"
    />

  </form>

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
                { name: "noRequirements", friendlyName: "Keybox or appointment not required" },
                { name: "phoneListingRealtorFirst", friendlyName: "Phone listing agent first" },
                { name: "phoneSellerFirst", friendlyName: "Phone seller first" },
                { name: "phoneTenantFirst", friendlyName: "Phone tenant first" },
                { name: "phoneOther", friendlyName: "Phone other" },
                { name: "touchbase", friendlyName: "Touchbase" },
                { name: "showingTime", friendlyName: "Showing Time (BC Northern only)" }
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
                { name: "detached", friendlyName: "Detached" },
                { name: "attached", friendlyName: "Attached" },
                { name: "multifamily", friendlyName: "Multifamily" }
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
        },
        {
          name: "Style of home",
          fields: [
            { 
              name: "styleOfHome",
              fType: "checkbox",
              friendlyName: "Style of home",
              options: [
                { name: "basementEntry", friendlyName: "Basement entry" },
                { name: "splitEntry", friendlyName: "Split entry" },
                { name: "oneStorey", friendlyName: "1 storey" },
                { name: "oneHalfStorey", friendlyName: "1½ storey" },
                { name: "twoStorey", friendlyName: "2 storey" },
                { name: "reverseTwoStorey", friendlyName: "Reverse 2 storey" },
                { name: "reverseTwoStoreyWithBasement", friendlyName: "Reverse 2 storey with basement" },
                { name: "twoStoreyWithBasement", friendlyName: "2 storey with basement" },
                { name: "threeStorey", friendlyName: "3 storey" },
                { name: "threeStoreyWithBasement", friendlyName: "3 storey with basement" },
                { name: "rancherOrBungalow", friendlyName: "Rancher or bungalow" },
                { name: "rancherOrBungalowWithBasement", friendlyName: "Rancher or bungalow with basement" },
                { name: "rancherOrBungalowWithLoft", friendlyName: "Rancher or bungalow with loft" },
                { name: "threeLevelSplit", friendlyName: "3 level split" },
                { name: "fourLevelSplit", friendlyName: "4 level split" },
                { name: "fivePlusLevel", friendlyName: "5+ level" },
                { name: "cabin", friendlyName: "Cabin" },
                { name: "lanewayHouse", friendlyName: "Laneway house" },
                { name: "carriageCoachHouse", friendlyName: "Carriage / coach house" },
                { name: "floatingHome", friendlyName: "Floating home" },
                { name: "manufacturedOrMobile", friendlyName: "Manufactured or mobile" },
                { name: "cornerUnit", friendlyName: "Corner unit" },
                { name: "endUnit", friendlyName: "End unit" },
                { name: "groundLevelUnit", friendlyName: "Ground level unit" },
                { name: "insideUnit", friendlyName: "Inside unit" },
                { name: "upperUnit", friendlyName: "Upper unit" },
                { name: "bachelorOrStudio", friendlyName: "Bachelor or studio" },
                { name: "liveWorkStudio", friendlyName: "Live / work studio" },
                { name: "loftWarehouseConversion", friendlyName: "Loft or warehouse conversion" },
                { name: "other", friendlyName: "Other" },
                { name: "penthouse", friendlyName: "Penthouse" }
              ]
            }
          ]
        },
        {
          name: "Title to land",
          fields: [
            {
              name: "titleToLand",
              fType: "radio",
              friendlyName: "Title to land",
              options: [
                { name: "freeholdNonStrata", friendlyName: "Freehold non-strata" },
                { name: "freeholdStrata", friendlyName: "Freehold strata" },
                { name: "firstNationsLease", friendlyName: "First Nations lease" },
                { name: "leaseholdPrepaidNonStrata", friendlyName: "Leasehold prepaid, non-strata" },
                { name: "leaseholdNotPrepaidNonStrata", friendlyName: "Leasehold not prepaid, non-strata" },
                { name: "leaseholdPrepaidStrata", friendlyName: "Leasehold prepaid, strata" },
                { name: "leaseholdNotPrepaidStrata", friendlyName: "Leasehold not prepaid, non-strata" },
                { name: "sharesInCooperative", friendlyName: "Shares in cooperative" },
                { name: "timeShare", friendlyName: "Time share" },
                { name: "undividedInterest", friendlyName: "Undivided interest" },
                { name: "vacationOwnership", friendlyName: "Vacation ownership" },
                { name: "other", friendlyName: "Other" }
              ]
            },
            { name: "landLeaseExpiryYear", fType: "number", friendlyName: "Land lease expiry year" }
          ]
        },
        {
          name: "Seller's interest",
          fields: [
            {
              name: "sellersInterest",
              fType: "checkbox",
              friendlyName: "Seller's interest",
              options: [
                { name: "registeredOwner", friendlyName: "Registered owner" },
                { name: "powerofAttorney", friendlyName: "Power of attorney" },
                { name: "committeeOrTrustee", friendlyName: "Committee or trustee" },
                { name: "courtOrderedSale", friendlyName: "Court ordered sale" },
                { name: "estateSale", friendlyName: "Estate sale" },
                { name: "contractualInterest", friendlyName: "Contractual interest" },
                { name: "option", friendlyName: "Option" },
                { name: "assignmentOfContract", friendlyName: "Assignment of contract" }
              ]
            }
          ]
        },
        {
          name: "Occupancy",
          fields: [
            {
              name: "occupancy",
              fType: "checkbox",
              friendlyName: "Occupancy",
              options: [
                { name: "owner", friendlyName: "Owner" },
                { name: "tenant", friendlyName: "Tenant" },
                { name: "underConstruction", friendlyName: "Under construction" },
                { name: "vacant", friendlyName: "Vacant" }
              ]
            }
          ]
        },
        {
          name: "Property disclosure statement completed?",
          fields: [
            {
              name: "propertyDisclosureStatement",
              fType: "radio",
              friendlyName: "Property disclosure statement completed?",
              options: [
                { name: "completed", friendlyName: "Yes" },
                { name: "notCompleted", friendlyName: "No" }
              ]
            },
            { name: "propertyDisclosureStatementNotCompletedExplanation", fType: "text", friendlyName: "If not, please explain" }
          ]
        }
      ],
      userInputs: {}
    }
  },
  methods: {
    storeUserInputs( newInputs ) {
      
      // Add new input to any existing values.
      this.userInputs = { ...this.userInputs, ...newInputs };

      // Iterate over the new object and remove any blank values.
      for (const [key, value] of Object.entries( this.userInputs ) ) {

        if (value.length <= 0 ) { delete this.userInputs[key] }
      }
    }
  }
}

</script>

