import './Style/style.css'
import React from 'react'
import { JWTContext } from '../../Contexts/JWTContext'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target

    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.context.changeJWT(Math.random())
    window.location.href = "/";
  }

  render() {
    return (
      <main className="form-signin m-auto mobile-container-login">
        <form onSubmit={this.handleSubmit}>
          <img className="mb-4 m-auto d-block" src="/img/logo.jpg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
          <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email" required autoFocus  
                  value={this.state.email} onChange={this.handleChange} />

          <label htmlFor="inputPassword" className="visually-hidden">Password</label>
          <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Senha" required 
                   value={this.state.password} onChange={this.handleChange} /><br />

          <button className="w-100 btn btn-lg btn-primary" type="submit">Logue</button>
          <a className="pt-3 mb-3 text-muted pointer" onClick={() => alert('ainda sem pagina')} >Esqueceu a senha?</a>
        </form>
      </main>
    )
  }
}
Login.contextType = JWTContext

export default Login
