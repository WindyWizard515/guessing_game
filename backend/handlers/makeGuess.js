import { gameState } from "../gameState/index.js"

export const makeGuessHandler = (request, response) => {
    if (gameState.rounds.length === 0) {
        response.status(400).send({message: "Error: No round has been started yet"})
        return
    } if (!request.body.player) {
        response.status(400).send({message: "Error: There is no 'player' property"})
        return
    } if (request.body.guess === undefined) {
        response.status(400).send({message: "Error: No 'guess' property sent"})
        return
    }
    
    const currentRoundId = gameState.rounds[gameState.rounds.length-1].id
    
    if (!gameState.guesses[currentRoundId]) {
        gameState.guesses[currentRoundId] = [{
            player: request.body.player,
            guess: request.body.guess,
        }]
    } else
        gameState.guesses[currentRoundId].push({
            player: request.body.player,
            guess: request.body.guess === undefined ? 0 : request.body.guess,
        })

        response.status(201).send(gameState)
    }