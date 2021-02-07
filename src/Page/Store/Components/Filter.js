import React from 'react'

import Product from "../../../Model/Product";

class Filter extends React.Component{

  constructor(props) {
    super(props)
    
    this.state = {
      isInStock: false,
      target: null,
      label: '',
      productNameFilter: ''
    }

    this.initialState = this.state
    this.activeFilterClassName = "bg-secondary section-secondary text-white"
    this.filterClassName = "section-secondary"

    this.filterElements = this.filterElements.bind(this)
    this.onClickFilter = this.onClickFilter.bind(this)
    this.resetElements = this.resetElements.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target.checked, target.value, value);
    let newState = {
      [target.id]: value
    }

    this.filterElements(newState)
    this.setState(newState)
  }

  onClickFilter(event) {
    let newState = { }

    if (this.state.target != event.target) {

      // CSS
      if (this.state.target) {
        this.state.target.className = this.filterClassName
      }
      event.target.className = this.activeFilterClassName

      // filtro
      newState = {
        target: event.target,
        label: event.target.getAttribute('data-tag'),
      }
    } else {
      // CSS
      this.state.target.className = this.filterClassName

      // filtro
      newState = {
        target: null,
        label: '',
      }
    }
    
    this.filterElements(newState)
    this.setState(newState)
  }

  filterElements(newState) {
    let filteredElements = this.props.elements
    let state = Object.assign({}, this.state, newState)

    if (state.isInStock) {
      filteredElements = filteredElements.filter((element) => {
        return element.hasStock()
      })
    }

    if (state.label) {
      filteredElements = filteredElements.filter((element) => {
        return element.getLabel() === state.label
      })
    }

    if (state.productNameFilter) {
      filteredElements = filteredElements.filter((element) => {
        return element.getName().indexOf(state.productNameFilter) !== -1
      })
    }

    this.props.setElements(filteredElements)
  }

  resetElements() {
    if (this.state.target) {
      this.state.target.className = this.filterClassName
    }
    this.setState(this.initialState)

    this.props.resetElements()
  }

  render () {
    return (
      <div>
        <section>
          <input type="teste" className="form-control" placeholder="Digite aqui um termo para busca" 
            id="productNameFilter" value={this.state.productNameFilter}
            onChange={ this.handleChange }/>
        </section>
        <section className="mt-4">

          <section>
            <button type="button" className="float-end btn btn-sm" onClick={this.resetElements}>Resetar</button>
            <h4 className="text-muted">Filtros</h4>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={this.state.isInStock} id="isInStock" onChange={ this.handleChange }/>
              <label className="form-check-label" htmlFor="isInStock">
                Tem estoque?
              </label>
            </div>
          </section>

          <section className="my-1 mx-0">
            <h4 className="text-muted">Categorias</h4>
            <h5 className="bg-secondary section-secondary text-white">Pedraria</h5>
            <p className="section-secondary" data-tag="perola" onClick={this.onClickFilter}>Pérola</p>
            <p className="section-secondary" data-tag="perola" onClick={this.onClickFilter}>Meia Pérola</p>
            <p className="section-secondary" data-tag="perola" onClick={this.onClickFilter}>Pérola Craqueladas</p>
            <p className="section-secondary" data-tag="perola" onClick={this.onClickFilter}>Missanga</p>

            <h5 className="bg-secondary section-secondary text-white">Chinelo</h5>
            <p className="section-secondary" data-tag="chinelo" onClick={this.onClickFilter}>Color</p>
            <p className="section-secondary" data-tag="chinelo" onClick={this.onClickFilter}>Flat</p>
            <p className="section-secondary" data-tag="chinelo" onClick={this.onClickFilter}>Top</p>
            <p className="section-secondary" data-tag="chinelo" onClick={this.onClickFilter}>Slim</p>

            <h5 className="bg-secondary section-secondary text-white">Acessorios</h5>
            <p className="section-secondary" data-tag="acessorios" onClick={this.onClickFilter}>Colas</p>
            <p className="section-secondary" data-tag="acessorios" onClick={this.onClickFilter}>Teste</p>
            <p className="section-secondary" data-tag="acessorios" onClick={this.onClickFilter}>Teste</p>
            <p className="section-secondary" data-tag="acessorios" onClick={this.onClickFilter}>Teste</p>

            <h5 className="bg-secondary section-secondary text-white">Outros</h5>
            <p className="section-secondary" data-tag="outros" onClick={this.onClickFilter}>Teste</p>
            <p className="section-secondary" data-tag="outros" onClick={this.onClickFilter}>Teste</p>
            <p className="section-secondary" data-tag="outros" onClick={this.onClickFilter}>Teste</p>
            <p className="section-secondary" data-tag="outros" onClick={this.onClickFilter}>Teste</p>
          </section>

        </section>
      </div>
    )
  }
}

export default Filter;
