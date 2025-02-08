const sayBoom = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BOOM")
            resolve()
        }, 2000)
    })
}

const main = async () => {
    console.log("In 2 seconds, I am going to shoot")

    // sayBoom is async, we need to use await becuase we are NOT in a top-level function
    await sayBoom()

    console.log("You're dead")
}

main()
// main is async, but we don't call with await becuase it's at the top level