import { gameState } from "../gameState/index.js"

export const stateHandler = (requests, response) => {
    response.status(200).send(gameState)
}