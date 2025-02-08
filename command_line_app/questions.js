const fs = require("fs")
const path = require("path")

const readQuestions = async () => {
    return new Promise((resolve, reject) => {
        console.log("I'm about to read questions")
        fs.readFile(
            path.join(__dirname, "./questions.json"),
            {
                encoding: "utf-8",
            },
            (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(data))
                }
            }
        )
    })

}

module.exports = {
    readQuestions,
}