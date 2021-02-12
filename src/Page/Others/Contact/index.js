import Breadcrumb from '../Components/Breadcrumb'


function Base() {
  return (
    <div className="container">
      <h3>CONTATO</h3>
      <Breadcrumb path="Contato"/>
      <div className="row">
        <div className="col">
          <p>Entre em contato conosco atravez dos numeros: </p>
          <table className="table otable-striped table-hover">
            <tr>
              <td>Fixo</td>
              <td><a href="tel:+556735212649">67 3521-2649</a></td>
            </tr>
            <tr>
              <td>WhatsApp</td>
              <td><a href="tel:+5567992269450">67 99226-9450</a></td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td><a href="mailto:pointdochinelo@gmail.com">pointdochinelo@gmail.com</a></td>
            </tr>
          </table>
          <hr />
          <form className="shadow p-2">
            <p className="m-0">Nome:</p>
            <input type="text" className="form-control" name="name" placeholder="Nome"/>
            <p className="m-0">E-mail:</p>
            <input type="mail" className="form-control" name="mail" placeholder="E-mail"/>
            <p className="m-0">Mensagem:</p>
            <input type="text" className="form-control" name="msg" placeholder="Mensagem"/>
            <button type="submit" className="btn btn-success mt-3" onClick={() => alert('Mensagem enviada')}>entrar em contato</button>
          </form>
        </div>
        <div className="col">
          <p className="m-0">Endereço: Rua Bruno Garcia, 361 - Centro - Três Lagoas - MS</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.14282365777!2d-51.70707588390598!3d-20.78995684299229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59ee0d263a950446!2sPoint%20Do%20Chinelo!5e0!3m2!1spt-BR!2sbr!4v1612590760985!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col">

        </div>
        <div className="col">

        </div>
      </div>
    </div>
  );
}

export default Base;
