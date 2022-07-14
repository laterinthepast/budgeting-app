import React from 'react';
import {Image, Col, Container, Row,} from 'react-bootstrap';
import styled from "styled-components";
import img5 from '../images/5.gif';
const Content = styled.div`

`

const Home = () => {
  return (
   <Container classname="container" className="d-flex align-items-center">
    <Content>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="dupa"> <h1>Better Solution For Your Budget</h1><h2>Manage your expenses and track your spending habits. Set up your goals and start saving today.</h2>
        <button type="button" class="btn btn-light"  >Let’s start!</button>
        </Col>
        <Col className="dupa1"> <Image src={img5} className="w-100" ></Image></Col>
      </Row>
    </Content>
   </Container>
    
  )
}

export default Home