import React, { Component } from 'react'

class Formulaire extends Component {

  state = {
    message: '',
    length: this.props.length
  }

  handleChange = event => {
    const message = event.target.value
    const length = this.props.length - message.length
    this.setState({ message, length })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
  }

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.createMessage()
    }
  }

  createMessage = () => {
    const { pseudo, submitCallback, length } = this.props
    const message = this.state.message

    submitCallback({ pseudo,  message })

    // Reset
    this.setState({ message: '', length })
  }

  render() {
    return (
      <form
        className='form'
        onSubmit={this.handleSubmit}
      >
        <textarea
          required
          maxLength={this.props.length}
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <div className="info">
          {this.state.length}
        </div>
        <button type="submit">
          Envoyer!
        </button>
      </form>
    )
  }
}

export default Formulaire
