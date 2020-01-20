const socketio = require('socket.io')
const parseStrngAsArray = require('./utils/parseStringAsArray')
const getDistanceFromLatLonInKm = require('./utils/calculateDistance')

let io
const connections = []

function setupWebsocket (server) {
  io = socketio(server)

  io.on('connection', (socket) => {
    const { latitude, longitude, techs }= socket.handshake.query

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStrngAsArray(techs),
    })
  })
}

function findConnections (coordinates, techs) {
  const calculateDistance = connection => getDistanceFromLatLonInKm(coordinates, connection.coordinates) < 10
  const thereIsSomeTech = connection => connection.techs.some(tech => techs.includes(tech))
  const findedConnections = connections.filter(connection => calculateDistance(connection) && thereIsSomeTech(connection))

  return findedConnections
}

function sendMessage(to, message, data) {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}

module.exports = {
  findConnections,
  sendMessage,
  setupWebsocket,
}
