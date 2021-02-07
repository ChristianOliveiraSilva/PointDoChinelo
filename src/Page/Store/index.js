import React from 'react'

import './Style/style.css'

import Album from './Components/StoreAlbum'
import Filter from './Components/Filter'

import Product from '../../Model/Product'

class Store extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      elements: []
    }

    this.setElements = this.setElements.bind(this)
    this.resetElements = this.resetElements.bind(this)
  }

  componentWillMount() {
    let elements = [
      new Product(1,'chris', 12.99, 'perola'),
      new Product(1,'asdasd', 0),
      new Product(1,'chrasdsadasis', 1),

      new Product(1,'asdasdasd', 112.99, 'perola'),
      new Product(1,'chris', 12.99),
      new Product(1,'asdasd', 0),

      new Product(1,'chris', 12.99),
      new Product(1,'asdasd', 0),
      new Product(1,'chrasdsadasis', 1),

      new Product(1,'asdasdasd', 112.99),
      new Product(1,'chris', 12.99),
      new Product(1,'asdasd', 0),

      new Product(1,'asdasdasd12', 112.99),
      new Product(1,'chris', 12.99),
      new Product(1,'asdasd', 0),

      new Product(1,'asdasdasd3', 112.99),
      new Product(1,'chris', 12.99),
      new Product(1,'asdasd', 0),

      new Product(1,'4444', 112.99),
      new Product(1,'chris', 12.99),
      new Product(1,'asdasd', 0),
    ]

    this.setState({
      elements: elements,
      initialElements: elements      
    })
  }

  setElements(elements) {
    if (elements.every((p) => p instanceof Product)) {
      this.setState({
        elements: elements
      })
    }
  }

  resetElements() {
    this.setState({
      elements: this.state.initialElements
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row border-bottom pb-3 border-3">
          <div className="col-12 col-lg-3 border-4 border-end ">
            <h4 className="pb-1 mt-3 text-center">Point do Chinelo - Loja</h4>
            <Filter setElements={this.setElements} resetElements={this.resetElements} elements={this.state.initialElements} />
          </div>
          <div className="col-12 col-lg-9">
            <Album elements={this.state.elements} />
          </div>
        </div>
      </div>
    )
  }
}

export default Store;
