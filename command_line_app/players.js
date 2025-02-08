// Import the addPlayer() and removeLatestAddedPlayer() functions
const { gameState } = require("./gameState.js")

const addPlayer = (playerName) => {
    gameState.players.push(playerName)
}

const removeLatestAddedPlayer = () => {
    return gameState.players.pop()
}

module.exports = {
    addPlayer,
    removeLatestAddedPlayer,
}