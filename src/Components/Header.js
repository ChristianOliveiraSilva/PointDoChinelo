import { Link } from "react-router-dom";
import { JWTContext } from "../Contexts/JWTContext";

function UserNav(props) {
    return (
        <>
            <Link className="btn" to="/profile">Perfil</Link>
            <Link className="btn" to="/logout">Sair</Link>
        </>
    )
}

function GuestNav(props) {
    return (
        <>
            <Link className="btn btn-outline-primary" to="/login">Logar</Link>
            <Link className="p-2 text-dark" to="/singup">cadastrar</Link>
        </>
    );
}

function Nav(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserNav />;
    }
    return <GuestNav />;
}

function Header() {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
            <p className="h5 my-0 me-md-auto header-main">Point do Chinelo</p>
            <nav className="my-2 my-md-0 me-md-3">
                <Link className="p-2 text-dark" to="/store">Loja</Link>
                <Link className="p-2 text-dark" to="/course">Cursos</Link>
            </nav>
            
            <JWTContext.Consumer>
            { ({JWT}) => <Nav isLoggedIn={JWT}/> }
            </JWTContext.Consumer>
        </header>
    )
  }

export default Header;