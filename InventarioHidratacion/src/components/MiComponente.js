import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        return(
            <React.Fragment>
                <input placeholder="Ingrese un nombre"></input>
                <h1>Hola, soy el Componente MiComponente</h1>
                <h2>Estoy probando componentes</h2>
            </React.Fragment>
        );
    }
}

export default MiComponente;