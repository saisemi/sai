import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import saiLogo from '../../img/saiLogo.jpg';

// const Container = styled.div`
//   width: 100%;
// `;

const HeaderContainer = styled.div`
  min-height: 50px;
  box-shadow: 0 5px 10px -10px rgba(0, 0, 0, 0.6);
  background-color: rgba(255,255,255,0.95);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderRow = styled(Row)`
  height: 30px;
`;

const Navbar = styled(Col)`
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Nav = styled.div`
  flex: 1 0 0px;
  border-bottom: ${({ active }) => active ? '3px solid #393492' : ''};
  &:hover {
    border-bottom: 3px solid #d3d1fa;
    cursor: pointer;
  }
`;

const NavLogo = styled.img`
  width: 100px;
`;


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hash: window.location.hash.slice(2),
      };
    }
  setHash = (hashStr) => {
    this.setState({
      ...this.state,
      hash: hashStr,
    })
  }

  render () {
    const { hash } = this.state;
    return (
    <HeaderContainer>
      <Container>
      <HeaderRow>
        <Col xs={3}>
        <Link to='/'>
          <NavLogo 
            src={saiLogo}
          />
          </Link>
        </Col>
        <Navbar xs={6}>
            <Nav active={hash === 'about'} onClick={() => this.setHash('about')}>
              <Link to='/about'>About Us</Link>
            </Nav>
            <Nav active={hash === 'services'} onClick={() => this.setHash('services')}>
              <Link to="/services">Services</Link>
            </Nav>
            <Nav active={hash === 'partners'} onClick={() => this.setHash('partners')}>
              <Link to="/partners">Partners</Link>
            </Nav>
            <Nav active={hash === 'customers'} onClick={() => this.setHash('customers')}>
              <Link to="/customers">Customers</Link>
            </Nav>
            <Nav active={hash === 'contactus'} onClick={() => this.setHash('contactus')}>
              <Link to="/contactus">Contact Us</Link>
            </Nav>
        </Navbar>
      </HeaderRow>
      </Container>
    </HeaderContainer>
  )
  }
};

export default Header;