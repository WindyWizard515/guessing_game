import { gameState } from "../gameState/index.js"

export const stateResetHandler = (request, response) => {
    gameState.players = []
    gameState.guesses = {}
    gameState.rounds = []
    gameState.points = {}

    response.status(200).send(gameState)
    return
}