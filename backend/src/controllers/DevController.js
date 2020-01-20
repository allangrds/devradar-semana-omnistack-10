const axios = require('axios')
const Dev = require('../models/DevSchema')
const parseStringAsArray = require('../utils/parseStringAsArray')
const { findConnections, sendMessage } = require('../websocket')

async function index (req, res) {
  const devs = await Dev.find()

  return res.status(200).json(devs)
}

async function store (req, res) {
  try {
    const {
      github_username: githubUsername,
      latitude,
      longitude,
      techs,
    } = req.body

    let dev = await Dev.findOne({ github_username: githubUsername })

    if (!dev) {
      const githubResponse = await axios.get(`https://api.github.com/users/${githubUsername}`)

      const {
        name,
        login,
        avatar_url: avatarUrl,
        bio,
      } = githubResponse.data
      const techsList = parseStringAsArray(techs)
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      dev = await Dev.create({
        github_username: githubUsername,
        name: name || login,
        avatar_url: avatarUrl,
        bio,
        techs: techsList,
        location,
      })

      const sendSocketMessageTo = findConnections({ latitude, longitude }, techsList)

      sendMessage(sendSocketMessageTo, 'new-dev', dev)
    }

    return res.status(201).json(dev)
  } catch (error) {
    return res.status(404).json({ message: 'User not found' })
  }
}

module.exports = { index, store }
