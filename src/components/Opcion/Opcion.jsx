import React, { Component } from 'react';
import Boton from '../Boton/Boton';

class Opcion extends Component {
    render() {
        const { id, nombre, handleClick } = this.props;
        return (
            <div className="opcion">
                <Boton id={id} nombre={nombre} handleClick={handleClick} />
                <h2>{this.props.opcion}</h2>
            </div>
        );
    }
}

export default Opcion;