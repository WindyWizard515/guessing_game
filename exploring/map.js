const friends = ["Rachel", "Phoebe", "Ross", "Monica", "Chandler", "Joey"]

const initials = friends.map((friend, index) => {
    return `${friend[0]} --- ${index}`
})

console.log(initials)