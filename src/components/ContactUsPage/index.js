import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const ContactDetails = styled(Col)`
    text-align: left;
`;

const Title = styled.h5`
`;

const MailTo = styled.a`
  font-size: 12px;
`;

const Body = () => (
    <Container>
        <Row>
        <Col xs={12} style={{ minHeight: '200px', margin: '10px 0'}}>
					<Container>
            <Row>
            <ContactDetails xs={6}>
							<Title>Contact Us</Title>
							<MailTo href="mailto:askus@semiconductorautomationsindia.in">askus@semiconductorautomationsindia.in</MailTo>
            </ContactDetails>
            </Row>
					</Container>
        </Col>
      </Row>
    </Container>
);

export default Body;
