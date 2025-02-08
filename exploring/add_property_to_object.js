// How to add propertyes to objects

const superheroAbilities = {
    specialPower: "laserbeams",
    weakness: "kryptonite",
}

console.log(superheroAbilities)

// If I know the name
superheroAbilities.iKnowTheName = "I added this dot notation"

console.log(superheroAbilities)

// If I dont know the name
const thisPropertyShouldExistOnTheObject = "strength"

console.log(thisPropertyShouldExistOnTheObject)

superheroAbilities[thisPropertyShouldExistOnTheObject] = 30

console.log(superheroAbilities)