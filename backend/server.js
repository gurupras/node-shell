const http = require('http')
const spawn = require('child_process').spawn

const config = require('../config')
const shellScriptPath = config.script

const SimpleWebsocketServer = require('simple-websocket/server')

const httpServer = http.createServer()
httpServer.listen(config.http_port, () => { console.log(`HTTP server listening on port ${config.http_port}`) })

const wss = new SimpleWebsocketServer({
  server: httpServer,
  path: '/websocket'
})

wss.on('connection', socket => {
  console.log(`Received connection`)

  socket.on('data', () => { // This is the ready signal. We don't expect any other data to come _from_ the client
    // Spawn a long-running child process and send across it's output to this websocket
    const child = spawn('bash', [shellScriptPath])
    child.stdout.on('data', data => {
      // Send across the data without any modifications
      try {
        socket.send(data)
      } catch (e) {
        child.kill()
      }
    })
    child.stderr.on('data', data => {
      // Send across the data without any modifications
      try {
        socket.send(data)
      } catch (e) {
        child.kill()
      }
    })
  })
})
