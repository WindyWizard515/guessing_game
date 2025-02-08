// The file for calculateFinalResults() function
const { gameState } = require("./gameState.js")
const { gatherResults } = require("./gatherResults.js")

const calculateFinalResults = () => {
    const results = {}

    gameState.rounds.forEach((rounds, index) => {
        const roundResults = gatherResults(index)
        
        const playerNames = Object.keys(roundResults)

        playerNames.forEach((player) => {
            if (results[player] === undefined) {
                results[player] = roundResults[player]
            } else {
                results[player] = results[player] + roundResults[player]
            }
        })
    })

    return results
}

module.exports = {
    calculateFinalResults,
}