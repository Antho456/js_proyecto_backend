import axios from 'axios'
import React from 'react'

const BicicletaDetalle = (props) => {
   
  const remove = (_id) => {
    axios.get(`http://localhost:5000/Bicicletas/delete/${_id}`)
      .then(function(response) {
        this.setState({
          filtered: response
        })
      }).catch(function(error) {
        console.log(error)
      })
  }

    return ( 
        <div class="row">
    <div class="col s12 m6">
      <div class="card yellow accent-4">
        <div class="card-content black-text">
          <span class="card-title">{props.Bicicleta.Color} </span>
          <p>Precio: {props.Bicicleta.Precio}</p>
          <p>Marca: {props.Bicicleta.Marca}</p>
    
        </div>
        <div class="card-action">
          <h5>Hola :D</h5>
        
          <button type="submit" onClick={remove.bind(this, props.Bicicleta._id)} className="waves-effect  red  btn" >Eliminar</button>

        </div>
      </div>
    </div>
  </div>
    )

}

export default BicicletaDetalle
