import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Register = ({
  githubUsername,
  handleAddDev,
  latitude,
  longitude,
  setGithubUsername,
  setLatitude,
  setLongitude,
  setTechs,
  techs,
}) => {
  const setInputValue = functionToCall => (event) => {
    functionToCall(event.target.value)
  }

  return (
    <aside className="register">
      <strong className="title">
        Cadastrar
      </strong>
      <form
        className="form"
        onSubmit={handleAddDev}
      >
        <div className="input-block">
          <label
            className="label"
            htmlFor="github_username"
          >
            Usuário do Github
            <input
              className="input"
              name="github_username"
              id="github_username"
              required
              value={githubUsername}
              onChange={setInputValue(setGithubUsername)}
            />
          </label>
        </div>

        <div className="input-block">
          <label
            className="label"
            htmlFor="techs"
          >
            Tecnologias
            <input
              className="input"
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={setInputValue(setTechs)}
            />
          </label>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label
              className="label"
              htmlFor="latitude"
            >
              Latitude
              <input
                className="input"
                name="latitude"
                id="latitude"
                value={latitude}
                required
                onChange={setInputValue(setLatitude)}
              />
            </label>
          </div>

          <div className="input-block">
            <label
              className="label"
              htmlFor="longitude"
            >
              Longitude
              <input
                className="input"
                name="longitude"
                id="longitude"
                value={longitude}
                required
                onChange={setInputValue(setLongitude)}
              />
            </label>
          </div>
        </div>

        <button className="button" type="submit">Salvar</button>
      </form>
    </aside>
  )
}

Register.propTypes = {
  githubUsername: PropTypes.string.isRequired,
  handleAddDev: PropTypes.func.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  setGithubUsername: PropTypes.func.isRequired,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired,
  setTechs: PropTypes.func.isRequired,
  techs: PropTypes.string.isRequired,
}

export default Register
