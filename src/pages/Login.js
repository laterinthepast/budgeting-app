



import { Container, Row, Col, Button, Form, Card, OverlayTrigger, Popover } from "react-bootstrap";
import styled from "styled-components";
import React, { useState } from "react";



const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`



const Login = () => {
  const [text, setText] = useState('');
  const inputHandler = event => {
    setText(event.target.value);
  }
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert('Text copied');
  }
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        Your unique username is <strong>amazing</strong>
        <input type="text" value={text} onChange={inputHandler} />
        <button onClick={copy} disabled={!text}>Copy To Clipboard</button>
      </Popover.Body>
    </Popover>
  );
  return (

    <Container className="login-wrapper">
      <Content>
        <Row>
          <h1 className="welcome-text">welcome to budgeting app</h1>
        </Row>
        {/*  <Row>
          <h2 className="welcome-text">to login, press here to create a username</h2>
        </Row> */}
        <Row>
          <Col>
            <Card className="welcome-card-wrapper">
              <Card.Body className="welcome-card">
                <Card.Title>Login</Card.Title>
                <Card.Text>
                  <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Paste your 10 characters username
                  </Form.Text>
                </Card.Text>

              
                  <a href="/Home.js">
                    Login </a>
               




              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="welcome-card-wrapper">
              <Card.Body className="welcome-card">
                <Card.Title>Register</Card.Title>
                <Card.Text>
                  Click on the button to generate your unique username
                </Card.Text>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <Button variant="success">Register</Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row className="welcome-username">
        </Row> */}

      </Content>

    </Container>


  )
};

export default Login;