import React from 'react'

import Product from '../../../Model/Product'

class ListProducts extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
        discount: null,
        shipping: props.shipping || 0,
        promoCode: ''
    }
    
    this.verifyPromoCode = this.verifyPromoCode.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const target = event.target

    this.setState({
      [target.name]: target.value
    })
  }

  verifyPromoCode () {
    const promoCode = this.state.promoCode.toUpperCase()

    if (promoCode == 'PRIMEIRACOMPRA') // fazer uma busca no banco e descobrir se existe codigo de promoção
        this.setState({
            discount: {name: 'primeiracompra', value: 5},
            promoCode: ''
        })
    else {
        this.setState({
            discount: null,
            promoCode: ''
        })
        alert('Código não valido')
    }
  }

  render() {
    const elements = this.props.elements
    const elementsLenght = elements.length
    let total = elements.reduce((total, element) => total + element.getPrice(), 0)
    const { discount, shipping } = this.state

    if (discount) {
        total = (total - discount.value) < 0 ? 0 : total - discount.value
    }
    
    if (!isNaN(shipping)) {
        total += shipping
    }

    return (
        <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Seu Carrinho</span>
                <span className="badge bg-secondary rounded-pill">{elementsLenght}</span>
            </h4>
            <ul className="list-group mb-3">
                { elements.map((item, key) => (
                    <li key={key} className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">{item.getName()}</h6>
                            <small className="text-muted">{item.getDescription()}</small>
                        </div>
                        <span className="text-muted">{item.getFormattedPrice()}</span>
                    </li>
                )) }

                { discount && 
                    <li className="list-group-item d-flex justify-content-between bg-light text-success">
                        <div>
                            <h6 className="my-0">Código de promoção</h6>
                            <small className="text-uppercase">{discount.name}</small>
                        </div>
                        <span>-{discount.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </li>
                }

                { shipping > 0 && !isNaN(shipping) &&
                    <li className="list-group-item d-flex justify-content-between bg-light text-danger">
                        <div>
                            <h6 className="my-0">Frete</h6>
                        </div>
                        <span>+{shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </li>
                }

                <li className="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong>{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong>
                </li>
            </ul>

            <section className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" name="promoCode" placeholder="Código de promoção" value={this.state.promoCode} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-secondary" onClick={this.verifyPromoCode}>Resgatar</button>
                </div>
            </section>
        </div>
    )
  }
}

export default ListProducts;
