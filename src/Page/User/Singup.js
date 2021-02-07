import './Style/style.css'
import React from 'react'

class Singup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      PasswordFieldType: 'password',
      errorMsg: '',
    }
    this.blockRequest = false;

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changePasswordFieldType = this.changePasswordFieldType.bind(this)
    this.emitError = this.emitError.bind(this)
  }

  handleChange(event) {
    const target = event.target

    this.setState({
      [target.name]: target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.blockRequest = false;
    this.setState({errorMsg: ''})

    if (this.state.password.length < 8) {
      this.emitError('Senha muito curta')
    }

    if (!this.state.password.match(/[a-zA-Z]/) || ! this.state.password.match(/[0-9]/)) {
      this.emitError('Utilize numeros e letras')
    }

    if (this.state.password !== this.state.passwordConfirmation) {
      this.emitError('Senhas não combinam')
    }

    if (!this.blockRequest) {
      this.saveUser({ name: this.state.name, email: this.state.email, password: this.state.password })
    }
  }

  changePasswordFieldType(event) {
    const target = event.target
    if (target.checked)
      this.setState({PasswordFieldType: 'text'})
    else
      this.setState({PasswordFieldType: 'password'})
  }

  emitError(msg) {
    this.setState({errorMsg: `Erro: ${msg}.`})
    this.blockRequest = true;
  }

  saveUser(user) {
    console.log(user);
    // implementar 
  }

  render () {
    return (
      <main className="form-signin m-auto mobile-container-login">
        <form onSubmit={this.handleSubmit}>
          <img className="mb-4 m-auto d-block" src="/img/logo.jpg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Faça seu cadastro rápido no plataforma</h1>
          <p className="mb-3 text-danger text-center">{this.state.errorMsg}</p>

          <label htmlFor="inputName" className="visually-hidden">Nome completo</label>
          <input type="text" id="inputName" name="name" className="form-control" placeholder="Nome completo" required autoFocus 
              value={this.state.name} onChange={this.handleChange} />

          <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
          <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email" required 
              value={this.state.email} onChange={this.handleChange} />
          
          <label htmlFor="inputPassword" className="visually-hidden">Senha</label>
          <input type={this.state.PasswordFieldType} id="inputPassword" name="password" className="form-control" placeholder="Senha" required 
              value={this.state.password} onChange={this.handleChange} />
          
          <label htmlFor="inputPasswordConfirmation" className="visually-hidden">Confirme sua Senha</label>
          <input type={this.state.PasswordFieldType} id="inputPasswordConfirmation" name="passwordConfirmation" className="form-control" placeholder="Confirme sua Senha" required 
              value={this.state.passwordConfirmation} onChange={this.handleChange} />

          <div className="checkbox mb-3 text-end">
            <input type="checkbox" id="showPassword" name="showPassword" value="Mostrar senha" onChange={this.changePasswordFieldType} /> 
            <label htmlFor="showPassword" className="ms-1"><small>Mostrar senha</small></label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Cadastre-se</button>
        </form> 
      </main>
    )
  }
}

export default Singup
