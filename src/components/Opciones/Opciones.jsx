import React, { Component } from 'react';
import Opcion from '../Opcion/Opcion';

class Opciones extends Component {
    render() {
        const { opcionA, opcionB, handleClick } = this.props;
        return (
            <div className="opciones">
                <Opcion id='A' handleClick={handleClick} opcion={opcionA} nombre='A' />
                <Opcion id='B' handleClick={handleClick} opcion={opcionB} nombre='B' />
            </div>
        );
    }
}

export default Opciones;