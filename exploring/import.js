// Default import
const somethingImported = require("./default_export.js")

console.log(somethingImported)

// Named import
const { thankYouForTheFish, myName } = require("./named_export.js")

console.log(thankYouForTheFish)
console.log(myName)

const theEntireThing = require("./named_export.js")
console.log(theEntireThing)
console.log(theEntireThing.thankYouForTheFish)
console.log(theEntireThing.myName)