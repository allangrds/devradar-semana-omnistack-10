import React, { useEffect, useState } from 'react'
import AppContainer from './ui/containers/App'
import api from './utils/services/api'

const App = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [devs, setDevs] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {
          latitude: latitudeFromBrowser,
          longitude: longitudeFromBrowser,
        } = position.coords

        setLatitude(latitudeFromBrowser)
        setLongitude(longitudeFromBrowser)
      },
      (error) => {
        console.log(error)
      },
      {
        timeout: 3000,
      },
    )
  }, [])

  useEffect(() => {
    async function loadDevs () {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleSubmit (data) {
    const { githubUsername, techs } = data
    const response = await api.post('/devs', {
      github_username: githubUsername,
      latitude,
      longitude,
      techs,
    })

    setDevs([
      ...devs,
      response.data,
    ])
  }

  return (
    <AppContainer
      handleSubmit={handleSubmit}
      latitude={latitude}
      setLatitude={setLatitude}
      longitude={longitude}
      setLongitude={setLongitude}
      devs={devs}
    />
  )
}

export default App
