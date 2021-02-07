import { Link } from "react-router-dom";

function Footer() { 
    return (
    <footer className="container pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
            <div className="col-12 col-md-2">
                <img className="mb-2" src="/img/logo.jpg" alt="" width="100" height="100" />
                <small className="d-block mb-3 text-muted">&copy; 2017-{ new Date().getFullYear() }</small>
            </div>
            <div className="col-6 col-md-7">
                <h5>CONTATO</h5>
                <p className="m-0">Rua Bruno Garcia, 361 - Centro - Três Lagoas - MS</p>
                <p className="m-0"><a href="tel:+556735212649">67 3521-2649</a></p>
                <p className="m-0"><a href="tel:+5567992269450">67 99226-9450</a></p>
                <p className="m-0">Desenvolvido por Christian</p>
            </div>
            <div className="col-6 col-md-3">
                <h5>Sobre</h5>
                <ul className="list-unstyled text-small">
                    <li><Link className="link-secondary" to="/about">Sobre</Link></li>
                    <li><Link className="link-secondary" to="/contact">Contate-nos</Link></li>
                    <li><Link className="link-secondary" to="/team">Time</Link></li>
                    <li><Link className="link-secondary" to="/FAQ">FAQ</Link></li>
                    <li><Link className="link-secondary" to="/terms">Termos de Uso e Privacidade</Link></li>
                </ul>
            </div>
        </div>
    </footer>
    )
  }

export default Footer;