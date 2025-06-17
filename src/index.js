import http from 'http'
import app from './app.js'

const port = 5555

const server = http.createServer(app)

server.listen(port, () => {
    return console.log(`App listening on port ${port}`)
})