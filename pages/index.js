import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Container, Row, Col, Card, Button, ButtonGroup, Dropdown, Accordion } from 'react-bootstrap';
import React, {Component} from 'react'
import Feature from './feature'

export default class Home extends Component {
state={
  feat:{},
  list:[{}],
  activeItem:"micro",
  loopstop:false
}
filters =[
  {name:"micro"},
  {name:"nano"},
  {name:"regional"},
  {name:"brewpub"},
  {name:"large"},
  {name:"planning"},
  {name:"bar"},
  {name:"contract"},
  {name:"proprietor"},
  {name:"closed"}

]


componentDidMount(){
  {/*fetch(`https://api.openbrewerydb.org/breweries/?page=${this.getRandomInt(393)}`)
  .then((response) => response.json())
  .then(data => this.setState({
    feat:data[this.getRandomInt(20)],
    
  }))*/}
  this.getSearch()
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

getSearch(){
  
  fetch(`https://api.openbrewerydb.org/breweries?by_type=${this.state.activeItem}`)
  .then((response) => response.json())
  .then(data => this.setState({
    list:data,
    loopstop:true
  }))
}
componentDidUpdate(){
  if(this.state.loopstop==false){
    this.getSearch()
    
  }
}

  handleItemClick = (e) => {

        this.setState({ activeItem: e.target.name,
                        loopstop:false
                        })
       
  }
  

render(){
  return (
    <Container>

      <Head>
        <title>Brew Finder App</title>
        <meta name="description" content="wow look at all these places to get a cold one" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main >
        
        <Container className="text-center">
        <Row>

        <h1>
          Brewery Finder 
        </h1>
        </Row>
        <small>neato</small>
        </Container>
        
        <Container  className="text-center">
        <div>
        <h2 className="text-center">Featured Brewery</h2>
        {/*featured card*/}
        <Feature/>

        {/* Original card, in case something breaks
        <Card style={{ width: '18rem',margin:"auto",border:"0"}}>
          <Card.Body>
            <Card.Title>{this.state.feat.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> {this.state.feat.street} </Card.Subtitle>
            <Card.Subtitle className="mb-2">{this.state.feat.city}, {this.state.feat.state}</Card.Subtitle>
            {this.state.feat.brewery_type?<Card.Text>It's a {this.state.feat.brewery_type} kind of place</Card.Text>:""}
          </Card.Body>
        </Card>*/}
      
      
        </div>
        </Container>
        <p/>
        <h2>Other Breweries</h2>
        <Row>
          
        {this.filters.map((filter,key) => (
  
          
          <Col xs={6} md={4} xl={3}><Button style={{textTransform:"capitalize", width:"10rem"}} variant="outline-primary" active={this.state.activeItem==filter.name} name={filter.name} key={key} onClick={this.handleItemClick}>{filter.name}</Button></Col>
          
          
        ))}
        
        
        </Row>

        

        <Row>
        {this.state.list.map((list,key) => (
          <Col xs={6} md={4} xl={3}>
          <Card style={{border:"0"}}>
          <Card.Body >
              <Card.Title>{list.name}</Card.Title>
              <Card.Subtitle className="mb-2">{list.city}, {list.state}</Card.Subtitle>
          </Card.Body>
        </Card>
        </Col>
        ))}
        </Row>


        

        

      </main>

      <footer >
       </footer>
    </Container>
  )
}
}
