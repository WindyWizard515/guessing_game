// Functions are awaitable when they return a Promise

const printNumberAfter1Second = async (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number)
            // reject(new Error ("Something went wrong"))
            resolve("I am the return value")
        }, 1000)
    })    
}

const main = async () => {
    const returnValue = await printNumberAfter1Second(3)
    console.log(returnValue)
    await printNumberAfter1Second(2)
    await printNumberAfter1Second(1)
}

main()
