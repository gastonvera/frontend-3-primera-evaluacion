import React, { Component } from 'react';

class Recordatorio extends Component {
    render() {
        const { opcionAnterior, historial } = this.props;
        return (
            <div className="recordatorio">
                <h3>Ultima eleccion: {opcionAnterior}</h3>
                <div className='historial'>
                    <h4>Elecciones anteriores:</h4>
                    <ol className='historial'>{historial.map((item, index) => (<li key={index}>{item}</li>))}</ol>
                </div>
            </div>
        );
    }
}

export default Recordatorio;