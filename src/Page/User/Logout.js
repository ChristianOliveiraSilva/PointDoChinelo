import './Style/style.css'
import React from 'react'
import { JWTContext } from '../../Contexts/JWTContext'

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { }

        this.removeJWT = this.removeJWT.bind(this)
    }

    removeJWT() {
        this.context.removeJWT()
        window.location.href = "/";
    }

    render() {
        return (
            <main className="form-signin m-auto mobile-container-login text-center">
                <button className="btn btn-primary" onClick={this.removeJWT}>Deseja sair mesmo?</button>
                <img className="mt-5 m-auto d-block img-thumbnail" src="/img/logo.jpg" alt="logo" title="logo" />
            </main>
        )
  }
}
Logout.contextType = JWTContext

export default Logout
