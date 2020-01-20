const Dev = require('../models/DevSchema')
const parseStringAsArray = require('../utils/parseStringAsArray')

async function index (req, res) {
  const { latitude, longitude, techs = '' } = req.query
  const techsList = parseStringAsArray(techs)

  const devs = await Dev.find({
    techs: {
      $in: techsList,
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude],
        },
        $maxDistance: 1000000,
      },
    },
  })

  return res.status(200).json(devs)
}

module.exports = { index }
