import React, { Component } from 'react';
import data from "../data.json";

class Historia extends Component {
    render() {
        return (<div className='historia'>
            <h1>{data[this.props.indice].historia}</h1>
        </div>);
    }
}
export default Historia;
