const interval = setInterval(() => {
    console.log("interval function")
}, 1000)

setTimeout(() => {
    clearInterval(interval)
}, 5000)