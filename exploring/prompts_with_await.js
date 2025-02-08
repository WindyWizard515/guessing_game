const prompts = require('prompts')

const askForUserName = async () =>{
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

  console.log("response from prompt", response)
}

askForUserName()
