import { Component } from 'react'
import Producto from './Producto'
import '../App.css';

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 50px',
    }
}
class Productos extends Component {
    render(){

        const { productos, agregarAlCarro } = this.props

        return (
            <div>
            <div className="productosBackground"></div>
            <div style={styles.productos} className="productos">
                
                {productos.map(producto => 
                <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    producto={producto} />
                )}
            </div>
            </div>
        )
    }
}

export default Productos