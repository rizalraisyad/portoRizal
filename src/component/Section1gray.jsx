import React from 'react'
import foto from '../img/rizal.jpg'
import { Container, Image, Row } from 'react-bootstrap'

const Section1gray = () => {
  return (
    <Row className = "custom-section1 m-0">
      <Container>
        <Row className = "align-items-center m-0 custom-section-1">
          <Row className = "justify-content-start col-8 m-0 ">
            <Row className ="font-title font-size-title m-0 p-0">
              <Row className = "mb-0 p-0 padding-bottom align-items-end">
                <span className="font-lightOrange2">Hello</span>
              </Row>
              <Row className = " p-0 padding-top align-items-start">
                <span className="font-black mr-2">I'm</span>Rizal Muharam
              </Row>
            </Row>
            
          </Row>
          <Row className = "justify-content-end col-4 m-0">
            <Image src={foto} className="custom-image"  roundedCircle  />
          </Row>
        </Row>
      </Container>
    </Row>
  )
}

export default Section1gray
