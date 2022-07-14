import React from 'react';
import { Image, Col, Container, Row, Button } from 'react-bootstrap';

import img5 from '../images/5.gif';



const Home = () => {
  return (
    <Container fluid="lg" className="full-height d-flex justify-content-center align-items-center ">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={6}>
          <h1>Better Solution For Your Budget</h1>
          <p className='fw-light fs-5 pt-5 pb-5'>Manage your expenses and track your spending habits. Set up your goals and start saving today.</p>
          <Button variant="danger">Let's go!</Button>
        </Col>
        <Col md={6}>
          <Image src={img5} className="w-100" >
          </Image></Col>
      </Row>
    </Container>

  )
}

export default Home