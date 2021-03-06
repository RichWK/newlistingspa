# newlistingspa

An online alternative to REBGV's existing 'Data Input Form' (a PDF) — built using Vue.js 3.

### To-dos

* Refine the design
  * Convert the 'Agent Details' section to work with `<FormRepeatingField>`. This is so they:
    * Are segmented to their own single line
    * Only show fields for all three agents when necessary
  * Consider arranging checkboxes and radios into columns using CSS grid
  * Add a PrimeVue toggle button to switch between feet and metres
  * Hide fields according to the property type that's been selected. Simplifies things for the user 🙂
  * Could look at SimpleTax for inspiration — they handle complex forms elegantly
* Refine the data structure
  * Fill out the "maximum" attribute for inputs and textareas
  * Add a "pattern" attribute — for basic data validation, especially for number fields
  * Subarea dropdown should filter based on the area selected. (And be greyed out prior to an area being selected.)
  * Some fields should deactivate based on the answer of others (e.g. 'will fixtures be removed?')
  * Some fields should be deactivated from the start and only calculate input from other fields (e.g. floor area, multifamily income)
* Bugs
  * PrimeVue's `<InputNumber>` seems to have a bug? Opened an issue on their repo

### Common commands

* Project setup on a new machine: `npm install`
* Access GUI when using @vue/cli: `vue ui`
* Compile for development, with hot-reloading: `npm run serve`
* Compile and minify for production: `npm run build`
* Lint and fix files: `npm run lint`

