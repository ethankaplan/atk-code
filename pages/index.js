import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Container, Row, Col, Card} from 'react-bootstrap';
import React, {Component} from 'react'

export default class Home extends Component {
state={
  feat:{},
  list:{}
}

componentDidMount(){
  fetch(`https://api.openbrewerydb.org/breweries/?page=${this.getRandomInt(393)}`)
  .then((response) => response.json())
  .then(data => this.setState({
    feat:data[this.getRandomInt(20)]
  }))
  
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



render(){
  return (
    <Container  >

      <Head>
        <title>Brew Finder App</title>
        <meta name="description" content="wow look at all these places to get a cold one" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="justify-content-md-center">
        
        <Container className="text-center">
        <Row>

        <h1>
          Brewery Finder 
        </h1>
        </Row>

        <small>neato</small>
        </Container>
        <Container style={{marginLeft:"auto"},{marginRight:"auto"}} className="text-center">
        <div>
        <h2 className="text-center">Featured Brewery</h2>
        {/*featured card*/}

        <Card style={{ width: '100px'},{margin:"auto"}}>
          <Card.Body>
            <Card.Title>{this.state.feat.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.state.feat.street}</Card.Subtitle>
            <Card.Subtitle className="mb-2">{this.state.feat.city}, {this.state.feat.state}</Card.Subtitle>
            <Card.Text>
              
            </Card.Text>
            
            <Card.Link href={this.state.feat.website_url}>Brewery Website</Card.Link>
          </Card.Body>
        </Card>

        </div>
        </Container>
        <p/>
        <h2>Other Breweries</h2>


      </main>

      <footer >
       </footer>
    </Container>
  )
}
}
