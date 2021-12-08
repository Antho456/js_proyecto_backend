import React, { Component } from "react";
import axios from "axios";

class BicicletaForm extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }
    submitNuevaPersona(evenet){
         //prevenga el comportamiento de efecto del submit
         evenet.preventDefault()
         axios.post('http://localhost:5000/Bicicletas', 
         {
             Color: this.refs.Color.value,
             Precio: this.refs.Precio.value,
             Marca: this.refs.Marca.value,
            
           
         }
         ).then((respuesta)=> console.log(respuesta) )
         .catch( error=>console.log(error) )
    }

    render(){
        return(  
            <div className="row">
                <h5 className="center">Nueva Bicicleta</h5>
                <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Color" ref="Color" />
                            <label htmlfor="Color">Color</label>
                        </div>  
                        <div className="input-field col s6">
                                <input id="Precio" ref="Precio"/>
                                <label htmlFor="Precio">Precio</label>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Marca" ref="Marca"/>
                            <label htmlfor="Marca">Marca</label>
                        </div>  
                        <div className="input-field col s6">
                             <button name="action" type="submit" className="waves-effect blue btn">
                                Guardar
                             </button>
                        </div>  
                    </div>
                </form>
            </div>
        )
    }
}

export default BicicletaForm
