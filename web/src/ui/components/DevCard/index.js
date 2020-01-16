import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const DevCard = ({ dev }) => (
  <li
    className="dev-card"
    // eslint-disable-next-line no-underscore-dangle
    key={dev._id}
  >
    <header className="header">
      <img
        alt={dev.name}
        className="header-img"
        src={dev.avatar_url}
      />
      <div
        className="user-info"
      >
        <span className="user-name">
          <strong>{dev.name}</strong>
        </span>
        <span className="user-techs">
          {dev.techs && dev.techs.join(', ')}
        </span>
      </div>
    </header>
    <p className="dev-bio">{ dev.bio }</p>
    <a
      className="dev-github-profile-link"
      href={`https://github.com/${dev.github_username}`}
    >
      Acessar perfil no Github
    </a>
  </li>
)

DevCard.propTypes = {
  dev: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    github_username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default DevCard
