import { gameState } from "../gameState/index.js"

export const addPlayerHandler = (request, response) => {

    if (!request.body.name) {
        response.status(400).send({
            message: "Error: You need to send a 'name' property"
        })
        return
    }

    const playerWithSameName = gameState.players.find((player) => {
        return player.name === request.body.name
    })

    if (!(playerWithSameName === undefined)) {
        response.status(400).send({
            message: `Error: A player with the name "${request.body.name}" already exists`
        })
        return
    } else
        gameState.players.push({
            name: request.body.name,
            points: 0,
        })



    response.status(200).send(gameState.players)
    return
}