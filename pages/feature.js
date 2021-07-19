//I'm unsure how to have this be used on the main page, but this uses more stuff that nextjs uses

import { useRouter } from 'next/router';
import Link from 'next/link';
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
    
    if(!feat) {
        loadData();
    }
  }, []);

  if(!feat) { 
      return <div style={{margin:"auto"}}>loading...</div>
  }

  return(
    <Link href= {`/${feat.id}`} >     
        <Card style={{ width: '18rem',margin:"auto"}}>
          <Card.Body>
           <Card.Title>{feat.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> {feat.street} </Card.Subtitle>
          <Card.Subtitle className="mb-2">{feat.city}, {feat.state}</Card.Subtitle>
        </Card.Body>
      </Card></Link>
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