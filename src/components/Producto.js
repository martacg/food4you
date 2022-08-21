import { Component } from "react"
import Button from './Button'

const styles = {
    producto: {
        width: '30%',
        padding: '10px 15px',
    },
    img: {
        width: '100%'
    }
}
class Producto extends Component {
    render(){

        const { producto, agregarAlCarro } = this.props

        return(
            <div style={styles.producto} className="producto">
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Order now
                </Button>
            </div>
        )
    }
}

export default Producto