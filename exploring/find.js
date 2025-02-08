// Explore the .find() function
const animals = [
    {
        name: "dog",
    },
    {
        name: "cat",
        color: "White",
    },
    {
        name: "cat",
        color: "Black",
    },
    {
        name: "bird",
    },
]

const foundAnimal = animals.find((animal) => {
    return animal.name === "cat"
})

console.log(foundAnimal)