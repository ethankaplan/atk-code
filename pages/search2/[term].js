import { useRouter } from 'next/router';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Term({ searchResults }) {
  const router = useRouter();
  
 const [search, setSearch] = useState(searchResults);
  useEffect(() => {
    async function loadData() {
      const response = await fetch('https://api.openbrewerydb.org/breweries/search?query='
      +router.query.term);
      const searchResults = await response.json();
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
        <Link href={`/${brew.id}`}>
        <Card style={{border:"0"}}>
          <Card.Body >
              <Card.Title>{brew.name}</Card.Title>
              <Card.Subtitle className="mb-2">{brew.city}, {brew.state}</Card.Subtitle>
          </Card.Body>
        </Card></Link>
    </Col>
  ))}</Row>
}



Term.getInitialProps = async ctx => {
    if(!ctx.req) {
        return { searchResults: [] };
    }

  const { query } = ctx;
  
  const response = await fetch(
    'https://api.openbrewerydb.org/breweries/search?query=' +
      query.term 
  );
  
  const searchResults = await response.json();
  return { searchResults: searchResults };
};