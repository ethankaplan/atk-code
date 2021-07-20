import {Navbar, Col, Row, Form, FormControl, Container } from 'react-bootstrap';
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function top() {

const router=useRouter()
    return (
    <Navbar bg="dark" variant="dark" sticky="top">
  <Container>
    <Navbar.Brand href="/">Beer Finder</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Form className="d-flex" 
    onSubmit={(e=>{
        e.preventDefault()
        let searched=document.getElementById('search').value
        
        router.push(`/search/${searched}`,null,{})
        {/*USEEFFECT for same page search note to self*/}
      })}>
      <FormControl
        type="Search"
        placeholder="Search"
        id="search" 
        name="search"
        
        className="mr-2"
        aria-label="Search"
      />
     
    </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        )

    }
    