// Import others files: Express, morgan, cors
import express from "express"
import morgan from "morgan"
import cors from "cors"

// Import our files:
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"
import { stateResetHandler } from "./handlers/stateReset.js"
import { getPlayersHandler } from "./handlers/getPlayers.js"
import { addPlayerHandler } from "./handlers/addPlayers.js"
import { startNewRoundWithRandomQuestion } from "./handlers/startNewRoundWithRandomQuestion.js"
import { makeGuessHandler } from "./handlers/makeGuess.js"
import { getCurrentRoundHandler } from "./handlers/getCurrentRound.js"
import { getCurrentRoundAnswersHandler } from "./handlers/getCurrentRoundAnswers.js"

// Start the function for the app
const app = express()

// Use all of our imports to start things up
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static("../frontend/out"))

// All of the handlers for our app.get
app.get("/hello", helloHandler)
app.get("/state", stateHandler)
app.get("/state/reset", stateResetHandler)
app.get("/players", getPlayersHandler)
app.get("/round/current", getCurrentRoundHandler)
app.get("/round/current/answers", getCurrentRoundAnswersHandler)

// All of the handlers for our app.post
app.post("/players", addPlayerHandler)
app.post("/round/start/randomquestion", startNewRoundWithRandomQuestion)
app.post("/guess", makeGuessHandler)

// Launch the app on port 3331 and
// print the action that we are doing.
console.log("Launching app on port 3331")
app.listen(3331)
