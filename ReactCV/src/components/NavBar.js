import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import learnSignLogo from "../../src/assets/images/learnSignLogo.png";
import menuIcon from "../../src/assets/icons/menu.png";
import closeIcon from "../../src/assets/icons/close.png";

const StyledAppBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f0f8ff;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 80px; /* Adjusted for a better fit */
`;

const StyledText = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #334589;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) => (props.show ? "flex" : "none")};
  }
`;

const StyledLink = styled(Link)`
  padding: 0 20px;
  font-size: 20px;
  font-weight: 400;
  color: #334589;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 0; /* Adjust spacing for mobile view */
  }
`;

const MobileMenuIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;
  margin-right: 20px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <StyledAppBar>
      <LogoContainer>
        <StyledLogo src={learnSignLogo} alt="LearnSign Logo" />
        <StyledText>Learnsign</StyledText>
      </LogoContainer>
      <MobileMenuIcon src={menuOpen ? closeIcon : menuIcon} alt="Menu" onClick={toggleMenu} />
      <StyledNav show={menuOpen}>
        <StyledLink to="/wordgame">WordGame</StyledLink>
        <StyledLink to="/baseline">AlphabetGame</StyledLink>
      </StyledNav>
    </StyledAppBar>
  );
}

export default NavBar;
