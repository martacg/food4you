import { Component } from "react";
import Productos from "./components/Productos";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Text from "./components/Text";

class App extends Component {
  state = {
    productos: [
      { name: "Plato 1", price: 12, img: "https://martagonzalez.dev/lab/food4you/products/plato-1.png" },
      { name: "Plato 2", price: 14, img: "https://martagonzalez.dev/lab/food4you/products/plato-2.png" },
      { name: "Plato 3", price: 8, img: "https://martagonzalez.dev/lab/food4you/products/plato-3.png" },
    ],
    carro: [
      
    ],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {

    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
      ? ({
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)
      return this.setState({ carro: newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state

    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title>Choose & Enjoy</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Text>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
