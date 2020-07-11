import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Map from './map';

const FooterContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Title = styled.h5`
`;

const Description = styled.p`
  font-size: 10px;
  text-align: left;
`;

const Address = styled.p`
  font-size: 12px;
`;

const Icon = styled.span`
  display: block;
  padding: 5px 0 0 5px;
  font-size: 12px;
  &::before {
    font-size: 16px;
    color: #393492;
    font-weight: 700;
    vertical-align: bottom;
  }
`;

const ContactDetails = styled(Col)`
  text-align: left;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <Row>
        <Col xs={12} style={{ minHeight: '200px', margin: '10px 0'}}>
          <Container>
                  <Row>
                    <ContactDetails xs={6}>
                      <Title>Address</Title>
                      <Address>unit #3, second floor, arya hub mall, hope farm junction, Whitefield, Banglore 560066.</Address>
                      <div>
                        <Icon className="mdl2-Phone"> 080-12341234</Icon>
                        <span></span>
                      </div>
                      <div>
                        <Icon className="mdl2-Mail"> askus@semiconductorautomationsindia.in</Icon>
                        <span></span>
                      </div>
                    
                    </ContactDetails>
                    <Col xs={6}>
                      <Map />
                    </Col>
                  </Row>
                </Container>
          
        </Col>
      </Row>
    </Container>
  </FooterContainer>
);

export default Footer;
