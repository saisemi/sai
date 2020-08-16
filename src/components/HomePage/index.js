import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import bgImage from '../../img/lab.jpg';

const BodyContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 200px;
  background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)), url(${bgImage});
`;

const Description = styled.p`
  text-align: justify;
  padding-left: 10px;
`;

const Body = () => (
    <BodyContainer>
      <Row>
        <Col>
          <h3>Semiconductor Automations India Pvt.Ltd</h3>
          <Description>
          At SAI, we enable the Indian semiconductor fabs to achieve end-to-end fab automation and we also help you in fab 
          equipment services from installation, maintenance, process automation &amp; 
          monitoring and can also help you with techno solutions for a better fab operations. SAI also enables realization of automating digital display technologies.
          </Description>
        </Col>
      </Row>
    </BodyContainer>
);

export default Body;
