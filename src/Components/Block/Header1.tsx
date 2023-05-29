import React from "react";
import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logos-atlassian-logo-gradient-horizontal-neutral.svg";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');
</style>;

const Header1 = () => {
  // const [show, setShow] = React.useState(false);

  // const changeHeaderColor = () => {
  //   if (window.scrollY >= 1) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };

  // window.addEventListener("scroll", changeHeaderColor);

  return (
    <div>
      {
        // show ?
        // null
        // :
        <Container>
          <Main>
            <LogNavHold>
              <Logo src={logo} />
              <NavHold>
                <Navs>
                  <Link to="">Products</Link>
                  <I />
                </Navs>
                <Navs>
                  <Link to="">For teams</Link>
                  <I />
                </Navs>
                <Navs>
                  <Link to="">Support</Link>
                  <I />
                </Navs>
              </NavHold>
            </LogNavHold>
            <Second>
              <BuyHold>
                <Buy>Buy now</Buy>
                <Search />
              </BuyHold>
              <AccountHold>
                <ProfileHold>
                  <Profile></Profile>
                </ProfileHold>
                <Account>My account</Account>
                <I />
              </AccountHold>
            </Second>
          </Main>
        </Container>
      }
    </div>
  );
};

export default Header1;
const ProfileHold = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled(FaUserCircle)`
  position: absolute;
  color: #f9f9f9;
  font-size: 25px;
`;

const Search = styled(FiSearch)`
  color: #989898;
  margin-left: 10px;
  transition: all 350ms;
  border-radius: 50%;
  margin-top: 4px;

  :hover {
    border-radius: 5px;
    cursor: pointer;
    background-color: #d6d6d6;
  }
`;

const Account = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  color: #0958cd;
`;

const BuyHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
`;

const Buy = styled.div`
  color: #0958cd;
  font-size: 15px;
  font-weight: 500;
  height: 22px;
  width: 70px;
  transition: all 350ms;
  :hover {
    background-color: #dfe1e5;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const AccountHold = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #dfe1e5;
  border-radius: 3px;
  width: 150px;
  height: 40px;
  cursor: pointer;
`;

const Second = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #555555;
  font-weight: 400;
`;
const I = styled(MdArrowDropDown)`
  color: #0303ba;
  margin-top: 4px;
`;
const Navs = styled.div`
  display: flex;
  align-items: center;
  transition: all 350ms;

  :hover {
    background-color: #dfe1e5;
    border-radius: 3px;
    height: 25px;
    max-width: auto;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 45%;
  height: 25px;
  /* color: #095ddc; */
  color: #042455;
  cursor: pointer;
`;

const NavHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 52%;
  height: 60px;
`;

const LogNavHold = styled.div`
  width: 45%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #f4f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
`;
