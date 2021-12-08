import React from 'react'

const BicicletaLista = (props) => {
    return ( 
        
    <ul className="collection with-header yellow darken-1">
      <li className="collection-header "><h4>Bicicletas:</h4></li>
       {
           props.list.map((item)=>{
               return(
                <a href="#!" className="collection-item" 
                key= {item._id}
                onClick={props.actualizarBicicleta.bind(this,item)}
                >
                    {item.Marca}  
                </a>
               )
           })
       }
      

      
    </ul>
          
    )

}

export default BicicletaLista
