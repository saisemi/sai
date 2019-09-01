import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import constructionImg from '../img/construction.gif';

const BodyContainer = styled(Container)`
  margin-top: 60px;
  margin-bottom: 60px;
  background-image: url(${constructionImg});
  background-position: inherit;
  min-height: 400px;
  font-weight: bold;
  color: #393492;
`;


const UnderConstruction = () => (
    <BodyContainer>
      <h1>UNDER CONSTRUCTION</h1>
    </BodyContainer>
);

export default UnderConstruction;
