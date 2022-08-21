import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#ffe001',
        color: '#000',
        padding: '15px 20px',
        border: 'none',
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
}

class Button extends Component {
    render(){
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button