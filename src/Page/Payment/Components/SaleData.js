import React from 'react'

class SaleData extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      zip: '',
      city: '',
      federation: 'MS',
      country: '',
      ccName: '',
      ccNumber: '',
      ccExpiration: '',
      ccCvv: '',
      errorMsg: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.makeValidations = this.makeValidations.bind(this)
    this.sendPayment = this.sendPayment.bind(this)
    this.pay = this.pay.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const newState = {
      [target.name]: target.value
    }

    this.setState(newState)
    this.props.setSaleData(Object.assign({}, this.state, newState))
  }

  makeValidations () {
    this.setState({errorMsg: 'erro interno'})
    return false;
  }

  sendPayment(event) {
    event.preventDefault();
    if (!this.makeValidations()) return false

    this.pay()
  }

  pay() {
    alert('pago')
  }

  render() {
    const ProfileFormProps = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      handleChange: this.handleChange
    }

    const AddressFormProps = {
      address: this.state.address,
      zip: this.state.zip,
      city: this.state.city,
      federation: this.state.federation,
      country: this.state.country,
      handleChange: this.handleChange
    }

    const PaymentProps = {
      ccName: this.state.ccName,
      ccNumber: this.state.ccNumber,
      ccExpiration: this.state.ccExpiration,
      ccCvv: this.state.ccCvv,     
    }

    const AllFormProps = {...ProfileFormProps, ...AddressFormProps, ...PaymentProps}
    return (
        <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Preencha alguns dados da cobrança</h4>
            <form onSubmit={this.sendPayment}>
              <div className="row g-3">
                { this.props.needData.profile && <ProfileForm {...ProfileFormProps} /> }
                { this.props.needData.address && <AddressForm {...AddressFormProps} /> }
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Pagamento</h4>

              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" defaultChecked className="form-check-input" required />
                  <label className="form-check-label" htmlFor="credit">Cartão de Crédito</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="debit">Cartão de Debito</label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Nome no cartão</label>
                  <input type="text" className="form-control" id="cc-name" name="ccName" value={this.state.ccName} onChange={this.handleChange} required />
                  <small className="text-muted">Nome completo conforme exibido no cartão</small>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Número do cartão</label>
                  <input type="text" className="form-control" id="cc-number" name="ccNumber" value={this.state.ccNumber} onChange={this.handleChange} required />
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Vencimento</label>
                  <input type="text" className="form-control" id="cc-expiration" name="ccExpiration" value={this.state.ccExpiration} onChange={this.handleChange} required />
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" name="ccCvv" value={this.state.ccCvv} onChange={this.handleChange} required />
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">Continue o Pagamento</button>
              <p className="my-3 text-danger">{this.state.errorMsg}</p>
            </form>
          </div>
    )
  }
}

function ProfileForm(props) {
  return (<>
    <div className="col-sm-6">
      <label htmlFor="firstName" className="form-label">Primeiro nome</label>
      <input type="text" className="form-control" id="firstName" name="firstName" value={props.firstName} onChange={props.handleChange} placeholder=""  required />
    </div>

    <div className="col-sm-6">
      <label htmlFor="lastName" className="form-label">Último nome</label>
      <input type="text" className="form-control" id="lastName" name="lastName" value={props.lastName} onChange={props.handleChange} placeholder=""  required />
    </div>

    <div className="col-12">
      <label htmlFor="phone" className="form-label">Telefone</label>
      <input type="tel" className="form-control" id="phone" name="phone" value={props.phone} onChange={props.handleChange} placeholder="Telefone" required />
    </div>

    <div className="col-12">
      <label htmlFor="email" className="form-label">Email</label>
      <div className="input-group">
        <span className="input-group-text">@</span>
        <input type="email" className="form-control" id="email" name="email" value={props.email} onChange={props.handleChange} placeholder="seuemail@exemplo.com" required />
      </div>
    </div>  
  </>)
}

function AddressForm(props) {
  return (<>
    <div className="col-12">
      <label htmlFor="address" className="form-label">Endereço</label>
      <input type="text" className="form-control" id="address" name="address" value={props.address} onChange={props.handleChange} placeholder="1234 Rua" required />
    </div>

    <div className="col-md-6">
      <label htmlFor="zip" className="form-label">CEP</label>
      <input type="text" className="form-control" id="zip" name="zip" value={props.zip} onChange={props.handleChange} placeholder="" required />
    </div>

    <div className="col-md-6">
      <label htmlFor="address2" className="form-label">Cidade</label>
      <input type="text" className="form-control" id="city" name="city" value={props.city} onChange={props.handleChange} placeholder="Três Lagoas, Rio de Janeiro, São Paulo" required />
    </div>

    <div className="col-md-6">
      <label htmlFor="federation" className="form-label">Estado</label>
      <select className="form-select" id="federation" name="federation" value={props.federation} onChange={props.handleChange} required>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
    </div>

    <div className="col-md-6">
      <label htmlFor="country" className="form-label">País</label>
      <select className="form-select" id="country" name="country" value={props.country} onChange={props.handleChange} required>
        <option>Brasil</option>
      </select>
    </div>
  </>)
}

export default SaleData;
