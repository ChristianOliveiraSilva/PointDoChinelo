import Product from "../../../Model/Product";
import React, { useState } from 'react';

function AlbumItem(props) {
  let { product } = props

  if (!(product instanceof Product)) {
    console.log(product);
    product = new Product('Produto não encontrado', 0)
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="35%" y="50%" fill="#eceeef" dy=".3em">{product.getPhoto()}</text></svg>

        <div className="card-body">
          <h4 className="card-title">{product.getName()}</h4>
          <p className="card-text"><small>{product.getDescription()}</small></p>
          <h4 className="text-primary">{product.getFormattedPrice()}</h4>

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Pagination(props) {

  const numberPages = Math.ceil(props.listLength / props.limit)

  let itens = []
  for (let index = 1; index <= numberPages; index++) {
    let className = index === props.page ? "page-item pointer active" : "page-item pointer"
    itens.push(<li className={className} key={index}><a className="page-link" onClick={() => { window.scrollTo(0, 0);props.changePage(index)}}>{index}</a></li>)
  }

  return (
    <nav aria-label="row Page navigation">
      <ul className="pagination mt-5">
        {itens}
      </ul>
    </nav>
  )
}

function Album(props) {

  let {elements} = props
  const limit = props.limit || 9
  const [page, setPage] = useState(props.page || 1)
  const start = (page-1) * limit
  const end = start + limit
  const listLength = elements.length

  elements = elements.slice(start, end)

  return (
    <div className="album">
      <div className="container">
        <h5 className="text-muted text-end" title={`Total de registros exibidos: ${elements.length} | Total de registros: ${listLength} `}>
          Total de registros: {elements.length}
        </h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
            elements.length !== 0
            ? elements.map((element, id) => <AlbumItem product={element} key={id}/> )
            : <h1 className="display-1">Sem Produtos Disponíveis</h1>
          }
        </div>
        <div className="row">
          { listLength > limit && <Pagination changePage={setPage} page={page} listLength={listLength} limit={limit} />}
        </div>
      </div>
    </div>
  )
}

export default Album;
