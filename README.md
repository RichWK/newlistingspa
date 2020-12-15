# newlistingspa

An online alternative to REBGV's existing 'Data Input Form' (a PDF).

### To-dos

* Refine the data structure
  * Fill out the "maximum" attribute for inputs and textareas
  * Add a "pattern" attribute — for basic data validation, especially for number fields
  * Subarea dropdown should filter based on the area selected. (And be greyed out prior to an area being selected.)
* Refine the design
  * `<FormRepeatingField>` and its child components need some work.
  * New field types
    * PrimeVue toggle button for switching between feet and metres
  * Hide fields according to the property type that's been selected. Simplifies things for the user 🙂
  * Could look at SimpleTax for inspiration — they handle complex forms elegantly
* Bugs
  * Clearing fields within `<FormRepeatingField>` does not clear the data
  * Open house date field is undefined in data

### Common commands

* Project setup on a new machine: `npm install`
* Access GUI when using @vue/cli: `vue ui`
* Compile for development, with hot-reloading: `npm run serve`
* Compile and minify for production: `npm run build`
* Lint and fix files: `npm run lint`

