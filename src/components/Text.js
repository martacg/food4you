import { Component } from "react"

const styles = {
    text:{
        marginBottom: '30px 0',
        padding: '0 50px',
    }
}
class Text extends Component {
    render(){
        return(
            <p style={styles.text} {...this.props}></p>
            
        )
    }
}

export default Text