import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Media } from 'react-bootstrap';
import bgImageSrc from '../../img/banner.png';

const BodyContainer = styled(Container)`
  margin-top: 60px;
  margin-bottom: 200px;
`;

const BgImg = styled.img`
  border: 1px solid #393492;
  width: 360px;
  padding: 2px;
`;

const Description = styled.p`
  text-align: left;
  padding-left: 10px;
`;

const Body = () => (
    <BodyContainer>
      <Row>
        <Col>
        <Media>
          <BgImg
            src={bgImageSrc}
          />
          <Media.Body>
            <h3>Semiconductor Automations India Pvt.Ltd</h3>
            <Description>
            At SAI, we enable the Indian semiconductor fabs to achieve fab automation and we also help you in fab equipment services from installation, maintenance, process automation and monitoring through MES and can also help you with techno solutions for a better fab operations
            </Description>
          </Media.Body>
        </Media>
        </Col>
      </Row>
    </BodyContainer>
);

export default Body;
