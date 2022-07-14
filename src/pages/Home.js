import React from 'react';
import { Image, Col, Container, Row, Button } from 'react-bootstrap';

import img5 from '../images/5.gif';



const Home = () => {
  return (
    <Container fluid="lg" className="m-0 p-0 ">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={6}>
          <h1 className="display-2 text-light ps-5">Better Solution For Your Budget</h1>
          <p className='fw-light fs-5 pt-3 pb-5 ps-5'>Manage your expenses and track your spending habits. Set up your goals and start saving today.</p>
          <Button variant="danger btn-primary ms-5">
            Let's go!
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </Button>
        </Col>
        <Col md={6} className="">
          <Image src={img5} className="w-100" >
          </Image></Col>
      </Row>
    </Container>

  )
}

export default Home