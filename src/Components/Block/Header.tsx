import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import software from "../../Assets/Jira Software_24.svg";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogNav>
            <Logo src={software} />
            <NavsHold>
              <Navs to="">Features</Navs>
              <Navs to="">Product guide</Navs>
              <Navs to="">Templates</Navs>
              <Navs to="">Pricing</Navs>
              <Navs to="">Enterprise</Navs>
            </NavsHold>
          </LogNav>
          <Button>Get it free</Button>
        </Main>
      </Container>
    </div>
  );
};

export default Header;
const Button = styled.button`
  color: white;
  background-color: #146aea;
  height: 35px;
  width: 95px;
  border: none;
  border-radius: 5px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: #0052cc;
  }
`;

const Navs = styled(NavLink)`
  color: blue;
  text-decoration: none;
`;

const NavsHold = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const LogNav = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  width: 85%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  /* top: 0; */
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=0, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color=#000000); /*IE 5.5-7*/
  z-index: 2;
`;
