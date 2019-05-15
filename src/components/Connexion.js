import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Connexion extends Component {

  state = {
    pseudo: '',
    isRedirect: false
  }

  handleChange = (event) => {
    const pseudo = event.target.value

    this.setState({ pseudo })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.pseudo) {
      // return <Redirect to='/pseudo/{this.state.pseudo}'></Redirect>
      this.setState({ isRedirect: true })
    }
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.pseudo}
            placeholder='Pseudo'
            required
            onChange={this.handleChange}
          />
          <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

export default Connexion
