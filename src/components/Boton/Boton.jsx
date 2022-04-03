import React, { Component } from 'react';

class Boton extends Component {
    render() {
        const { id, handleClick } = this.props;
        return (
            <button id={id} className='botones' onClick={handleClick}>
                {this.props.nombre}
            </button>
        );
    }
}

export default Boton;