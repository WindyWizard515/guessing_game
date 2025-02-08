const friends = ["Rachel", "Monica", "Phoebe"]

const printFriends = (friend, index) => {
    console.log(friend, index, "inside printFriend")
}

friends.forEach(printFriends)

friends.forEach((friend, index) => {
    console.log(friend, index, "inside anonymous fuction")
})