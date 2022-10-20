import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { desktop } from "../_Responsive";
import logo from "../logo.svg";

const Container = styled.div`
  height: 7vh;
  width: 100%;
  position: static;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
`;

const Logo = styled.img``;

const LogoLink = styled.a`
  transform: translate(0px, 0px);
  z-index: 9;
`;

const NavLinksContainer = styled.div`
  gap: 1rem;
  margin-right: 35px;
  display: none;

  ${desktop({ display: "flex", zIndex: "1" })};
`;

const NavLinksGroupOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const NavLinksGroupTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NavLink = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-decoration: none;
  font-weight: 200;
  color: white;
  font-size: 48px;
  animation: translate 1.5s ease-in reverse;

  a:visited {
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }

  @keyframes translate {
    0% {
      translate: 0%;
    }

    100% {
      translate: 100%;
    }
  }
`;
const NavLinkTwo = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-decoration: none;
  font-weight: 200;
  color: white;
  font-size: 32px;
  animation: translate 1.7s ease reverse;

  a:visited {
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }

  @keyframes translate {
    0% {
      translate: 0%;
    }

    100% {
      translate: 100%;
    }
  }
`;

const NavLinkNumber = styled.span`
  font-size: 14px;
  margin-top: 10px;
  color: #f358a1;
`;
const NavLinkNumberTwo = styled.span`
  font-size: 8px;
  margin-top: 10px;
  color: #f358a1;
`;

const NavExpanded = styled.div`
  ${desktop({ display: "none" })}
  background-color: #3200c8;
  width: 100%;
  height: 100vh;
  padding: 5rem 1rem;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
`;

const NavMenuContainer = styled.div`
  ${desktop({ display: "none" })}
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
`;

function NavBar() {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const menuIconStyles = {
    cursor: "pointer",
    fontSize: "55px",
    color: "white",
    marginRight: "1.5rem",
  };

  return (
    <Container>
      {expand ? (
        <NavExpanded>
          <NavLinksGroupOne expand={expand}>
            <NavLink href="about">
              About <NavLinkNumber>01</NavLinkNumber>
            </NavLink>
            <NavLink href="Work">
              Work<NavLinkNumber>02</NavLinkNumber>
            </NavLink>
            <NavLink href="people">
              People<NavLinkNumber>03</NavLinkNumber>
            </NavLink>
          </NavLinksGroupOne>
          <NavLinksGroupTwo>
            <NavLinkTwo href="news">
              News<NavLinkNumberTwo>04</NavLinkNumberTwo>
            </NavLinkTwo>
            <NavLinkTwo href="culture">
              Culture & Careers<NavLinkNumberTwo>05</NavLinkNumberTwo>
            </NavLinkTwo>
            <NavLinkTwo href="contact">
              Contact<NavLinkNumberTwo>06</NavLinkNumberTwo>
            </NavLinkTwo>
          </NavLinksGroupTwo>
        </NavExpanded>
      ) : (
        <NavLinksContainer>
          <NavLink href="about">About</NavLink>
          <NavLink href="Work">Work</NavLink>
          <NavLink href="people">People</NavLink>
          <NavLink href="about">About</NavLink>
          <NavLink href="Work">Work</NavLink>
          <NavLink href="people">People</NavLink>
        </NavLinksContainer>
      )}
      <NavMenuContainer>
        <LogoLink href="/">
          <Logo src={logo} />
        </LogoLink>
        {expand ? (
          <CloseIcon style={menuIconStyles} onClick={toggleExpand} />
        ) : (
          <MenuIcon style={menuIconStyles} onClick={toggleExpand} />
        )}
      </NavMenuContainer>
    </Container>
  );
}

export default NavBar;