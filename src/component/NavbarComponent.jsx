import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import logo from '../img/logo.jpeg'
import { ButtonContainer } from '../styledComponent/ButtonContainer'

const NavbarComponent = () => {
  return (
    <Navbar sticky="top" className = "mt-0 p-0">
      <Container className = "p-0 w-100">
        <Row className="d-flex justify-content-between w-100 m-0 p-0">
            <Col className = "d-flex justify-content-center">
              <ButtonContainer className="font-title">Home</ButtonContainer>
            </Col>
            <Col className = "d-flex justify-content-center">
              <ButtonContainer className="font-title">About</ButtonContainer>
            </Col>
            <Col className = "d-flex justify-content-center">
              <ButtonContainer className="font-title">Service</ButtonContainer>
            </Col>
            <Col className = "d-flex justify-content-center">
            <Navbar.Brand href="#home"><Image src={logo} width="50" height="45" rounded /> </Navbar.Brand>
            </Col>
            <Col className = "d-flex justify-content-center">
              <ButtonContainer className="font-title">Portofolio</ButtonContainer>
            </Col>
            <Col className = "d-flex justify-content-center">
              <ButtonContainer className="font-title">Contact</ButtonContainer>
            </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
