import './Style/style.css'

import photo from '../../Assets/maxresdefault.jpg'
import React from 'react';

function MoreInfo(props) {
  return <h1>MoreInfo</h1>
}

function MoreCourses(props) {
  return <h1>MoreCourses</h1>
}

function Accordion(props) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  )
}


class Class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Não carregado',
      courseName: 'Não carregado',
      author: 'Não carregado',
      date: 'Não carregado',
      permission: false,
      needBuy: false,
    }
  }

  componentWillMount() {
    this.setState({
      name: 'Video aula 01 Video aula 01 ',
      courseName: 'missanga',
      author: 'Alexandra',
      date: '20/20/2020',
      permission: true,
      needBuy: true
    })
  }

  render () {

    if (!this.state.permission) {
      return <h1>Opsss</h1>
    }

    let info = {}

    return (
      <main className="container">
        <div className="row">
          <div className="col">
            <img src={photo} className="img-thumbnail" />
            <h2>title</h2>
            <p style={{textAlign: 'justify'}}>paragrafo de descrição</p>
            {this.state.needBuy 
            ? <button className="btn btn-secondary float-end" onClick={() => this.setState({needBuy: false})}>Compre este curso!</button>
            : <MoreInfo info={info} />}
          </div>
          <div className="col shadow-lg p-3 mb-5 bg-white rounded">
            <Accordion />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MoreCourses />
          </div>
        </div>
      </main>
    )
  }
}

export default Class;
