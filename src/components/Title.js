import { Component } from "react"

const styles = {
    title:{
        marginBottom: '30px 0',
        padding: '0 50px',
    }
}
class Title extends Component {
    render(){
        return(
            <h1 style={styles.title} {...this.props} />
            
        )
    }
}

export default Title