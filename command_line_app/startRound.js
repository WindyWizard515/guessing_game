// The file for startRound() function
const { gameState } = require("./gameState.js")
const { readQuestions } = require("./questions.js")

const startRound = async (roundNumber) => {
    console.log(`\n--- Round ${roundNumber} ---`)
    console.log("And here's your question!")
    const allQuestions = await readQuestions()
    const specificQuestion = allQuestions[roundNumber]
    console.log(specificQuestion.prompt)

    gameState.rounds.push({
        guesses: [],
        question: {
            prompt: specificQuestion.prompt,
            answer: specificQuestion.answer,
            correctAnswerOffset: specificQuestion.correctAnswerOffset,
            closeAnswerOffset: specificQuestion.closeAnswerOffset,
        },
    })
}

module.exports = {
    startRound,
}