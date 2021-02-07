import React from 'react';

import ShowProductsComponent from "./ShowProductsComponent";
import ShowVideoDescriptionComponent from "./ShowVideoDescriptionComponent";
import ShowMoreInfoComponent from "./ShowMoreInfoComponent";

function HeaderBox(props) {

    function changeComponent(newComponent) {
        props.changeComponent(newComponent)
    }

    function isActive(value) {
        return value === props.currentComponent ? true : false;
    }

    let componentItems = [
        {number: 0, text: 'Descrição do Vídeo'},
        {number: 1, text: 'Produtos Usados'},
        {number: 2, text: 'Sobre a Aula'},
    ]

    return (
        <div className="container-fluid">
            <div className="row py-2">
                { componentItems.map(item => (
                    <React.Fragment key={item.number}>
                        <section className="col text-center pointer py-3 HeaderBoxItem" 
                            data-isactive={isActive(item.number)}
                            onClick={() => changeComponent(item.number)}>{item.text}</section>
                    </React.Fragment>
                )) }
            </div>
        </div>
    )
}


class VideoBoxInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            component: 0
        }

        this.componentsToUse = [
            ShowVideoDescriptionComponent,
            ShowProductsComponent,
            ShowMoreInfoComponent,
        ]

        this.changeComponentToDisplay = this.changeComponentToDisplay.bind(this)
        this.chooseComponentToDisplay = this.chooseComponentToDisplay.bind(this)
    }

    changeComponentToDisplay(newComponent) {
        let length = this.componentsToUse.length

        if (!isNaN(newComponent) && newComponent >= 0 && newComponent < length) {
            this.setState({
                component: newComponent
            }) 
        }
    }

    chooseComponentToDisplay() {
        return this.componentsToUse[this.state.component]()
    }

    render() {
        let currentComponent = this.chooseComponentToDisplay()

        return (
            <div className="my-4 bg-light rounded">
                <HeaderBox currentComponent={this.state.component} changeComponent={this.changeComponentToDisplay} />
                { currentComponent }
            </div>
        )
    }
}

export default VideoBoxInfo;
