import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './HighScoreInput.css'

import { saveHOFEntry } from './HallOfFame'

class HighScoreInput extends Component {
  state = { winner: '' }

  // Arrow function for direct binding
  handleWinnerUpdate = e => {
    this.setState({ winner: e.target.value.toUpperCase() })
  }

  // Arrow function for direct binding
  persistWinner = e => {
    e.preventDefault();
    const newEntry = { guesses: this.props.guesses, player: this.state.winner }
    saveHOFEntry(newEntry, this.props.onStored)
  }

  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Bravo ! Entre ton prénom :
            <input type="text" autoComplete="given-name" value={this.state.winner} onChange={this.handleWinnerUpdate} />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    )
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired
}

export default HighScoreInput