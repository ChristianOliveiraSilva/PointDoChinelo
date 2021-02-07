import React from 'react'
import './Style/style.css'

import ProductNotFound from "./Components/ProductNotFound";

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productNotFound: true,
            name: 'Não foi encontrado',
            photo: 'NotFound.png',
            value: 0,
            description: 'Não foi encontrado',
        }
    }

    componentWillMount() {
        this.setState({
            productNotFound: false,
            name: 'Perola',
            value: 1,
            photo: 'asdasdasd',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tortor tellus. Morbi leo orci, ornare eu consequat a, tincidunt at eros. Etiam sodales nibh id mi bibendum malesuada. Pellentesque laoreet, urna vel sagittis tempor, metus metus eleifend tellus, eget eleifend quam augue vel dolor. Cras in viverra justo, non suscipit enim. Nam non felis malesuada, pretium mi id, commodo magna. In varius urna et mauris vulputate, id venenatis metus rhoncus. Sed vulputate elit odio, vel finibus tellus euismod et. Aliquam in lectus non turpis mollis rhoncus sit amet ac ligula. Nam maximus mollis eros porttitor scelerisque. Quisque eu sollicitudin dolor. Duis turpis ipsum, sollicitudin at massa ac, faucibus congue nisi.',
        })
    }

    render(){
        if (this.state.productNotFound) {
            return <ProductNotFound />
        }

        const {name, value, photo, description} = this.state;

        return (
            <div className="container-fluid">
                <div className="row border-bottom pb-3 border-3">
                    <div className="col-12 col-lg-3 border-4 border-end ">
                        <h4 className="pb-1 mt-3 text-center">Point do Chinelo - Loja</h4>
                    </div>
                    <div className="col-12 col-lg-9">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <img src={photo} alt={name} title={name} />
                            </div>
                            <div className="col-12 col-lg-8">
                                <h2>{name} R$ {parseFloat(value)}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="col-12 text-end mt-3">
                            <button className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;