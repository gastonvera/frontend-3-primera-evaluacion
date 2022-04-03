import React, { Component } from 'react';
import Historia from '../Historia/Historia';
import Opciones from '../Opciones/Opciones';
import Recordatorio from '../Recordatorio/Recordatorio';
import data from '../data.json';

const historialOpcionesElegidas = [];

class Contenedor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indice: 0,
            contador: 1,
            opcionAnterior: ""
        }
    }

    componentDidUpdate(estadoAnterior) {
        if (estadoAnterior.indice !== this.state.indice) {
            historialOpcionesElegidas.push(this.state.opcionAnterior)
        }
    }

    handleClick = (e) => {
        const id = e.target.id;
        const contador = this.state.contador;
        if (contador > 7) {
            alert("FIN.");
        } else if (id === "A") {
            this.setState({
                indice: contador,
                contador: contador + 2,
                opcionAnterior: "A"
            });
        } else if (id === "B") {
            this.setState({
                indice: contador + 1,
                contador: contador + 2,
                opcionAnterior: "B",
            });
        }
    }

    render() {
        const { indice, opcionAnterior } = this.state;
        return (
            <div className="layout">
                <Historia indice={indice} />
                <Opciones handleClick={this.handleClick}
                    opcionA={data[indice].opciones.a}
                    opcionB={data[indice].opciones.b} />
                <Recordatorio opcionAnterior={opcionAnterior} historial={historialOpcionesElegidas} />
            </div>
        );
    }
}

export default Contenedor;