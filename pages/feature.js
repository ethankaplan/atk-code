import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feat({ featResult }) {
  const router = useRouter();

 const [feat, setFeat] = useState(featResult);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(`https://api.openbrewerydb.org/breweries/?page=${getRandomInt(393)}`)
      const featResult = await response.json();
    
      setFeat(featResult[getRandomInt(20)]);
    
    }

    if(feat.length == 0) {
        loadData();
    }
  }, []);

  if(!feat.name) { 
      return <div style={{margin:"auto"}}>loading...</div>
  }

  return(      
        <Card style={{ width: '18rem',margin:"auto",border:"0"}}>
          <Card.Body>
           <Card.Title>{feat.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {feat.street} </Card.Subtitle>
          <Card.Subtitle className="mb-2">{feat.city}, {feat.state}</Card.Subtitle>
          <Card.Link href={feat.website_url}>Brewery Website</Card.Link>
        </Card.Body>
      </Card>
  )
}



Feat.getInitialProps = async ctx => {
    if(!ctx.req) {
        return { featResult: [] };
    }

  const { query } = ctx;
  const response = await fetch(
    'https://api.openbrewerydb.org/breweries/search?query=' +
      query.term 
  );
  const featResult = await response.json();
  return { featResult: featResult };
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }