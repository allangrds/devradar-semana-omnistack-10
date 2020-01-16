import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import DevCard from '../components/DevCard'
import RegisterContainer from './Register'

const App = ({
  devs,
  handleSubmit,
  latitude,
  longitude,
  setLatitude,
  setLongitude,
}) => {
  const [githubUsername, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')

  function handleAddDev (event) {
    event.preventDefault()

    handleSubmit({
      githubUsername,
      techs,
    })

    setGithubUsername('')
    setTechs('')
  }

  return (
    <div className="app">
      <RegisterContainer
        handleAddDev={handleAddDev}
        githubUsername={githubUsername}
        setGithubUsername={setGithubUsername}
        techs={techs}
        setTechs={setTechs}
        latitude={latitude}
        setLatitude={setLatitude}
        longitude={longitude}
        setLongitude={setLongitude}
      />

      <main>
        <ul>
          {
            devs.map(dev => (
              <DevCard
                dev={dev}
              />
            ))
          }
        </ul>
      </main>
    </div>
  )
}

App.propTypes = {
  devs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      avatar_url: PropTypes.string,
      name: PropTypes.string,
      techs: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired,
}

export default App
