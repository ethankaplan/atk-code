import { withRouter } from 'next/router';
import React, {Component } from 'react'
import {Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class term extends Component {
    state={
        brews:[{
            id:0,
            name:"",
            brewery_type:"micro"
        }],
    }
    
    componentDidMount(){
        
        fetch(`https://api.openbrewerydb.org/breweries/search?query=${this.props.router.query.term}`)
        .then((response) => response.json())
        .then(data => this.setState({
          brews:data
        }))
        
        }
    
    render(){
        
        return (
            <div>

        {this.state.brews.map((brew,index) => (
          <Col>{brew.name}</Col>
        ))}
            </div>
        )
    }
}
export default withRouter(term)