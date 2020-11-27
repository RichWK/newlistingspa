# newlistingspa

An online alternative to REBGV's existing 'Data Input Form' (a PDF).

### To-dos

* Refine the data structure
  * Add a "maximum selected" attribute — to limit the number of checkboxes which can be selected. (Different fields have different requirements.)
  * Add a "pattern" attribute — for basic data validation, especially for number fields
  * A few fields need the ability to specify a "note". (e.g. 'Age Type', 'Units in Development'.) Maybe this could be an icon which reveals details when tapped / on mouseover.
* Refine the design
  * Could look at SimpleTax for inspiration — they handle complex forms elegantly
  * New field types
    * Currency
    * Textarea
    * PrimeVue toggle button for switching between feet and metres
    * Decimal
  * Merge `<FormRadio>` into `<FormCheckbox>` and name it `<FormSelection>`
  * Hide fields depending on which property type has been selected. Simplifies for the user 🙂

### Common commands

* Project setup on a new machine: `npm install`
* Access GUI when using @vue/cli: `vue ui`
* Compile for development, with hot-reloading: `npm run serve`
* Compile and minify for production: `npm run build`
* Lint and fix files: `npm run lint`

