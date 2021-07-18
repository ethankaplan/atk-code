import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function id({ searchResults }) {
  const router = useRouter();

 const [search, setSearch] = useState(searchResults);
  useEffect(() => {
    async function loadData() {
      const id = await fetch('https://api.openbrewerydb.org/breweries/'
      +query.id);
      const searchResults = await response.json();
      console.log(searchResults)
      setSearch(searchResults);
    }

    if(search.length == 0) {
        loadData();
    }
  }, []);

  if(!search[0]) { 
      return <div>loading...</div>
  }

  return <Row>{search.map((brew,key) => (
    <Col xs={6} md={4} xl={3}>
        <Card style={{border:"0"}}>
          <Card.Body >
              <Card.Title>{brew.name}</Card.Title>
              <Card.Subtitle className="mb-2">{brew.city}, {brew.state}</Card.Subtitle>
          </Card.Body>
        </Card>
    </Col>
  ))}</Row>
}



id.getInitialProps = async ctx => {
    if(!ctx.req) {
        return { searchResults: [] };
    }

  const { query } = ctx;
  const response = await fetch(
    'https://api.openbrewerydb.org/breweries/' +
      query.id 
  );
  const searchResults = await response.json();
  return { searchResults: searchResults };
};