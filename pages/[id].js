//I'm unsure how to have this be used on the main page, but this uses more stuff that nextjs uses

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Link } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './topbar/top'

export default function Id({ featResult, simResult, typeResult }) {
  const router = useRouter();

 const [feat, setFeat] = useState(featResult);
 const [sim,setSim] = useState(simResult)
 const [typ,setTyp] = useState(typeResult)
  useEffect(() => {
    async function loadData() {
      const response = await fetch(`https://api.openbrewerydb.org/breweries/${router.query.id}}`)
      const featResult = await response.json();
      setFeat(featResult);

    }

    if(feat.length == 0) {
        loadData() 
    }
  }, []);

    async function loadOther(){
      const simResponse = await fetch(`https://api.openbrewerydb.org/breweries?by_dist=${feat.latitude},${feat.longitude}&per_page=12`)
      const simResult = await simResponse.json()
      setSim(simResult)

      
      
    }

  if(!feat.name) {
      
      return <div style={{margin:"auto"}}>loading...</div>
  }


  console.log(typ)
  return(      
    <div><Nav/>
        <Card style={{ width: '18rem',margin:"auto",border:"0"}}>
          <Card.Body>
           <Card.Title>{feat.name}</Card.Title>
           {feat.brewery_type?<Card.Subtitle>A {feat.brewery_type} brewery<p/></Card.Subtitle>:""}
          {feat.street?<Card.Subtitle className="mb-2 text-muted"> {feat.street} </Card.Subtitle>:""}
          {feat.address_2?<Card.Subtitle className="mb-2 text-muted"> {feat.address_2} </Card.Subtitle>:""}
          {feat.address_3?<Card.Subtitle className="mb-3 text-muted"> {feat.address_3} </Card.Subtitle>:""}
          {feat.city && feat.state?<Card.Subtitle className="mb-2">{feat.city}, {feat.state} {feat.postal_code? feat.postal_code:""}</Card.Subtitle>:""}
          {feat.phone?<Card.Subtitle>📞 {formatPhoneNumber(feat.phone)}</Card.Subtitle>:""}
          {feat.website_url?<Card.Link href={feat.website_url}>Brewery Website</Card.Link>:""}
        </Card.Body>
      </Card>
      {/*by type*/}
    <Container>
      
      Other {feat.brewery_type}s
      
    </Container>
      </div>
  )
}



Id.getInitialProps = async ctx => {
    if(!ctx.req) {
        return { featResult: [] };
    }

  const { query } = ctx;
  const response = await fetch(
    'https://api.openbrewerydb.org/breweries/search?query=' +
      query.term 
  );
  const featResult = await response.json();
  const typeRes = await fetch(`https://api.openbrewerydb.org/breweries?by_type${featResult.brewery_type}&per_page=4`)
  const typeResponse = await typeRes.json();

  return { featResult: featResult, simResult:[] , typeResponse:typeResponse };
};


{/* ======================= */}

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }