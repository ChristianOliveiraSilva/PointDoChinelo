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
            <main className="form-signin m-auto mobile-container-login">
                <button className="btn btn-primary" onClick={this.removeJWT}>Deseja Sair mesmo?</button>
            </main>
        )
  }
}
Logout.contextType = JWTContext

export default Logout
