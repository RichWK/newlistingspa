# newlistingspa

An online alternative to REBGV's existing 'Data Input Form' (a PDF).

### To-dos

* Refine the data structure
  * Fill out the "maximum" attribute for inputs and textareas
  * Add a "pattern" attribute — for basic data validation, especially for number fields
  * A few fields need the ability to specify a "note". (e.g. 'Age Type', 'Units in Development'.) Maybe this could be an icon which reveals details when tapped / on mouseover.
  * Subarea dropdown should filter based on the area selected. (And be greyed out prior to an area being selected.)
* Refine the design
  * Follow rebgv.org's style guidelines for branding
  * Add our logo
  * Could look at SimpleTax for inspiration — they handle complex forms elegantly
  * New field types
    * Currency
    * PrimeVue toggle button for switching between feet and metres
    * Decimal
  * Limit checkbox selection based on 'maximum' attribute
  * Show `<h2>` for any `<FormSelection>` whose data specifies a label attribute
  * Hide fields according to the property type selected by the user. Simplifies things 🙂
* Bugs
  * Clearing fields within <FormRepeatingField> does not clear the data

### Common commands

* Project setup on a new machine: `npm install`
* Access GUI when using @vue/cli: `vue ui`
* Compile for development, with hot-reloading: `npm run serve`
* Compile and minify for production: `npm run build`
* Lint and fix files: `npm run lint`

