// Import all of the files we need
const { gameState } = require("./gameState.js")
const { startRound } = require("./startRound.js")
const { makeGuess } = require("./makeGuess.js")
const { addPlayer, removeLatestAddedPlayer } = require("./players.js")
const { gatherResults } = require("./gatherResults.js")
const { calculateFinalResults } = require("./calculateFinalResults.js")
const { readQuestions } = require("./questions.js")
const prompts = require("prompts")

const gatherPlayerGuess = async (playerName) => {
    const promptInput = await prompts({
        type: 'number',
        name: 'guess',
        message: `What is your guess ${playerName}?`
    })
    return promptInput.guess
}

const main = async () => {
    // Welcome the players to our app
    console.log("Welcome to my app")

    const response = await prompts([
    {
        type: 'text',
        name: 'playerOne',
        message: 'What is your name, player one?'
    },
    {
      type: 'text',
      name: 'playerTwo',
      message: 'What is your name, player two?'
    },
])

    // Set the playerOne and playerTwo variables to names
    const playerOne = response.playerOne
    const playerTwo = response.playerTwo

    // Add and remove players
    // console.log("Current players: ", gameState.players)
    addPlayer(playerOne)
    addPlayer(playerTwo)
    // addPlayer("The person with bad internet")
    // console.log("Players after adding", gameState.players)
    // const playerThatWasRemoved = removeLatestAddedPlayer()
    // console.log("Players after removing", gameState.players)
    // console.log("The player that was removed", playerThatWasRemoved)

    // Set up the function to welcome players to our game
    const welcomePlayer = (playerName) => {
        console.log("Hello, welcome to our game: ", playerName)
    }

    console.log("The copyright year: ", gameState.copyrightYear)
    console.log("The game is: ", gameState.gameName)

    welcomePlayer(playerOne)
    welcomePlayer(playerTwo)

    // Starting and guessing in round 1
    await startRound(0)
    const playerOneRoundZeroGuess = await gatherPlayerGuess(playerOne)
    const playerTwoRoundZeroGuess = await gatherPlayerGuess(playerTwo)
    makeGuess(0, playerOne, playerOneRoundZeroGuess)
    makeGuess(0, playerTwo, playerTwoRoundZeroGuess)

    // Print things about the round
    const firstRoundResults = gatherResults(0)
    console.log("Round results", JSON.stringify(firstRoundResults, undefined, 2))

    // Starting and guessing in round 2
    await startRound(1)
    const playerOneRoundOneGuess = await gatherPlayerGuess(playerOne)
    const playerTwoRoundOneGuess = await gatherPlayerGuess(playerTwo)
    makeGuess(1, playerOne, playerOneRoundOneGuess)
    makeGuess(1, playerTwo, playerTwoRoundOneGuess)

    // Print things about the round
    const secondRoundResults = gatherResults(1)
    console.log("Round results", JSON.stringify(secondRoundResults, undefined, 2))

    // Starting and guessing in round 3
    await startRound(2)
    const playerOneRoundTwoGuess = await gatherPlayerGuess(playerOne)
    const playerTwoRoundTwoGuess = await gatherPlayerGuess(playerTwo)
    makeGuess(2, playerOne, playerOneRoundTwoGuess)
    makeGuess(2, playerTwo, playerTwoRoundTwoGuess)

    // Print things about the round
    const thirdRoundResults = gatherResults(2)
    console.log("Round results", JSON.stringify(thirdRoundResults, undefined, 2))

    const finalResults = calculateFinalResults()
    console.log("\nFinal results", finalResults)
}

main()

// const anotherWrapper = async () => {
//     const questionsFromFiles = await readQuestions()
//     console.log("questionsFromFiles", questionsFromFiles)
//     console.log(typeof questionsFromFiles)
// }

// anotherWrapper()