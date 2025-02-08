export const helloHandler = (requests, response) => {
    response.status(404).send({
        message: "Hello, this our first app"
    })
}