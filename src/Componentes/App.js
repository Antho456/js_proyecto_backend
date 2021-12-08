import React, {Component} from 'react'
import axios from 'axios'
import BicicletaDetalle from './Personas/BicicletaDetalle';
import BicicletaForm from './Personas/BicicletaForm';
import BicicletaLista from './Personas/BicicletaLista';
import imagen from '../assets/img/bicicleta.jpg';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      Bicicleta: [],
      BicicletaActual : {}
    }

    //vincular la funcion de actualizar al componente
    this.actualizarBicicletaActual = this.actualizarBicicletaActual.bind(this)
  }

  //llamar a la api rest
  componentDidMount(){
      const url = "http://localhost:5000/Bicicletas"
      axios.get(url)
          .then((respuesta) => {   
              this.setState({
                 Bicicleta: respuesta.data
              })
              console.log(respuesta.data)
          })
          .catch((error) => { console.log(error) })

    
  }



  //Establecer la persona a ver detalle
  actualizarBicicletaActual(Bicicleta){
    //actualizar state:
    this.setState({
      BicicletaActual: Bicicleta
    })
  }

  render(){
    return (
      <div className="container-fluid">
        
          <div className="row" > 
              <div className="col s12">
              <nav>
                <div className="nav-wrapper yellow accent-4">
                <img src={imagen} width="200" height="120"></img>
                  <a href="#!" className="brand-logo right black-text">Bicicletas</a>
                </div>
              </nav>
              </div>
          </div>
          <div className="row" >
              <div className="col s3">
                    <BicicletaLista list={this.state.Bicicleta} 
                     actualizarBicicleta={this.actualizarBicicletaActual} 
                    
                    />
                </div>
              <div className="col s9">
                  <BicicletaDetalle  Bicicleta={this.state.BicicletaActual}/>
              </div>
          </div>
          <div className="row">
              <div className="col s12">
                  <BicicletaForm />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
