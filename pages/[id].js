import { withRouter } from 'next/router';
import React, {Component } from 'react'

class id extends Component {
    state={
        brew:{},
        
    }
    
    componentDidMount(){
        
        fetch(`https://api.openbrewerydb.org/breweries/${this.props.router.query.id}`)
        .then((response) => response.json())
        .then(data => this.setState({
          brew:data
        }))
        console.log(this.brew)
        }
    
    render(){
        
        return (
            <div>
                
                {this.state.brew.name}
            </div>
        )
    }
}
export default withRouter(id)