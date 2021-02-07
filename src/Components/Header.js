import { Link } from "react-router-dom";

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return (
        <div>
            <Link className="btn btn-outline-primary" to="/login">Logar</Link>
            <Link className="p-2 text-dark" to="/singup">cadastrar</Link>
        </div>
    );
}

function Greeting(props) {
    const isLoggedIn = false;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function Header() {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
            <p className="h5 my-0 me-md-auto header-main">Point do Chinelo</p>
            <nav className="my-2 my-md-0 me-md-3">
                <Link className="p-2 text-dark" to="/store">Loja</Link>
                <Link className="p-2 text-dark" to="/course">Cursos</Link>
            </nav>
            <Greeting />
        </header>
    )
  }

export default Header;