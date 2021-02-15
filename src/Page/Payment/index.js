import React from 'react'

import './Style/style.css'

import Product from '../../Model/Product'

import ProductsList from './Components/ProductsList'
import SaleData from './Components/SaleData'

import { JWTContext } from '../../Contexts/JWTContext'

class Payment extends React.Component{

constructor(props) {
  super(props)
  this.state = {
    elements: [new Product(1,'chris', 12.99, 'perola'), new Product(1,'asdadds', 12.99, 'perola')],
    needData: {profile: true, address: true},
    saleData: {},
    shipping: 0,
  }

    // this.setElements = this.setElements.bind(this)
    // this.resetElements = this.resetElements.bind(this)
    this.setSaleData = this.setSaleData.bind(this)
  }

  componentWillMount() {
    if (this.context.JWT) {
      this.setState({needData: {profile: true, address: true}})
    }
  }

  setSaleData (saleData) {
    this.setState({saleData: saleData})
  }

  render () {
    return (
        <div className="container">
          <div className="row g-3">
            <ProductsList elements={this.state.elements} shipping={this.state.shipping}/>
            <SaleData elements={this.state.elements} needData={this.state.needData} setSaleData={this.setSaleData} />          
          </div>
        </div>
      )
    }
}
Payment.contextType = JWTContext

export default Payment;
